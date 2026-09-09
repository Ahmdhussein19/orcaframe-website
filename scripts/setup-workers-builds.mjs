#!/usr/bin/env node
/**
 * Wires Cloudflare Workers Builds for this repo.
 *
 * Requires a *user-scoped* Cloudflare API token with:
 *   - Workers Builds Configuration: Edit
 *   - Workers Scripts: Read
 *
 * Create at: https://dash.cloudflare.com/profile/api-tokens
 * One-time: install the Cloudflare GitHub App via Worker Settings → Builds → Connect.
 *
 * Usage:
 *   CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... node scripts/setup-workers-builds.mjs
 *
 * Optional env:
 *   WORKER_TAG (default: looked up from Worker name "orcaframe")
 *   GITHUB_OWNER (default: Ahmdhussein19)
 *   GITHUB_REPO (default: orcaframe-website)
 *   PRODUCTION_BRANCH (default: main)
 */

const ACCOUNT_ID =
  process.env.CLOUDFLARE_ACCOUNT_ID || "61091c3a39d0ecf52af1c5face14362c";
const TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const WORKER_NAME = process.env.WORKER_NAME || "orcaframe";
const GITHUB_OWNER = process.env.GITHUB_OWNER || "Ahmdhussein19";
const GITHUB_REPO = process.env.GITHUB_REPO || "orcaframe-website";
const PRODUCTION_BRANCH = process.env.PRODUCTION_BRANCH || "main";

if (!TOKEN) {
  console.error(
    "Set CLOUDFLARE_API_TOKEN (user-scoped, Builds Edit + Workers Scripts Read).",
  );
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

async function cf(method, path, body) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}${path}`,
    {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body),
    },
  );
  const json = await res.json();
  if (!json.success) {
    const msg = JSON.stringify(json.errors || json, null, 2);
    throw new Error(`${method} ${path} failed (${res.status}): ${msg}`);
  }
  return json.result;
}

async function github(path) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "orcaframe-workers-builds-setup",
    },
  });
  if (!res.ok) {
    throw new Error(`GitHub ${path} failed: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

async function main() {
  const [user, repo] = await Promise.all([
    github(`/users/${GITHUB_OWNER}`),
    github(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}`),
  ]);

  console.log(`GitHub user id=${user.id} repo id=${repo.id} default_branch=${repo.default_branch}`);

  let workerTag = process.env.WORKER_TAG;
  if (!workerTag) {
    const scripts = await cf("GET", "/workers/scripts");
    const match = scripts.find((s) => s.id === WORKER_NAME);
    if (!match?.tag) {
      throw new Error(`Worker "${WORKER_NAME}" not found or missing tag`);
    }
    workerTag = match.tag;
  }
  console.log(`Worker tag=${workerTag}`);

  const connection = await cf("PUT", "/builds/repos/connections", {
    provider_type: "github",
    provider_account_id: String(user.id),
    provider_account_name: GITHUB_OWNER,
    repo_id: String(repo.id),
    repo_name: GITHUB_REPO,
  });
  const repoConnectionUuid =
    connection.repo_connection_uuid || connection.uuid || connection.id;
  console.log(`Repo connection=${repoConnectionUuid}`);

  const tokens = await cf("GET", "/builds/tokens");
  let buildTokenUuid =
    tokens?.[0]?.build_token_uuid || tokens?.[0]?.uuid || tokens?.[0]?.id;
  if (!buildTokenUuid) {
    throw new Error(
      "No build tokens found. In the dashboard: Worker → Settings → Builds → API token → create one, then re-run.",
    );
  }
  console.log(`Build token=${buildTokenUuid}`);

  const triggers = await cf("GET", `/builds/workers/${workerTag}/triggers`);
  const existing = Array.isArray(triggers) ? triggers : [];

  async function ensureTrigger({ name, branchIncludes, branchExcludes, deployCommand }) {
    const found = existing.find((t) => t.trigger_name === name);
    const payload = {
      external_script_id: workerTag,
      repo_connection_uuid: repoConnectionUuid,
      build_token_uuid: buildTokenUuid,
      trigger_name: name,
      build_command: "npx @opennextjs/cloudflare build",
      deploy_command: deployCommand,
      root_directory: "/",
      branch_includes: branchIncludes,
      branch_excludes: branchExcludes,
      path_includes: ["*"],
      path_excludes: [],
    };
    if (found?.trigger_uuid) {
      const updated = await cf("PATCH", `/builds/triggers/${found.trigger_uuid}`, payload);
      console.log(`Updated trigger ${name} (${found.trigger_uuid})`);
      return updated.trigger_uuid || found.trigger_uuid;
    }
    const created = await cf("POST", "/builds/triggers", payload);
    const id = created.trigger_uuid || created.uuid || created.id;
    console.log(`Created trigger ${name} (${id})`);
    return id;
  }

  const prodBranch = repo.default_branch || PRODUCTION_BRANCH;
  const prodTrigger = await ensureTrigger({
    name: "Deploy production",
    branchIncludes: [prodBranch],
    branchExcludes: [],
    deployCommand: "npx @opennextjs/cloudflare deploy",
  });
  const previewTrigger = await ensureTrigger({
    name: "Deploy preview branches",
    branchIncludes: ["*"],
    branchExcludes: [prodBranch],
    deployCommand: "npx @opennextjs/cloudflare upload",
  });

  await cf("PATCH", `/builds/triggers/${prodTrigger}/environment_variables`, {
    NODE_ENV: { value: "production", is_secret: false },
  });
  await cf("PATCH", `/builds/triggers/${previewTrigger}/environment_variables`, {
    NODE_ENV: { value: "production", is_secret: false },
  });

  const build = await cf("POST", `/builds/triggers/${prodTrigger}/builds`, {
    branch: prodBranch,
  });
  console.log("Triggered production build:", build.build_uuid || build.uuid || build);
  console.log("Workers Builds wiring complete.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
