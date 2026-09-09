"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import {
  ArrowRightIcon,
  ChartLineIcon,
  DatabaseIcon,
  PlugsConnectedIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { LogoCloud } from "@/components/ui/logo-cloud";

const AnalyticsDashboard = dynamic(
  () => import("@/components/dashboard/AnalyticsDashboard"),
  {
    loading: () => (
      <div className="flex size-full items-center justify-center bg-muted/40">
        <div className="size-full animate-pulse bg-muted" />
      </div>
    ),
    ssr: false,
  }
);

const steps = [
  {
    icon: PlugsConnectedIcon,
    title: "Connect",
    body: "Pull ERPs, spreadsheets, sensors, APIs, and PDFs into one pipeline.",
  },
  {
    icon: DatabaseIcon,
    title: "Centralize",
    body: "Clean, model, and trust a single operational data layer across teams.",
  },
  {
    icon: ChartLineIcon,
    title: "Decide",
    body: "Ship live dashboards that become the daily home page for operations.",
  },
] as const;

const plans: {
  name: string;
  setup: string;
  monthly: string;
  featured?: boolean;
  features: string[];
}[] = [
  {
    name: "Starter",
    setup: "$4,999",
    monthly: "$299",
    features: ["1–2 data sources", "1 multi-page dashboard", "Maintenance included"],
  },
  {
    name: "Growth",
    setup: "$8,999",
    monthly: "$599",
    featured: true,
    features: ["3–5 data sources", "2 multi-page dashboards", "Full maintenance plan"],
  },
  {
    name: "Enterprise",
    setup: "Custom",
    monthly: "Custom",
    features: ["Unlimited sources", "Dedicated dashboards", "SLA & on-site support"],
  },
];

export function HomePage() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = revealRef.current;
    if (!root) return;

    const nodes = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={revealRef} className="min-h-screen overflow-x-hidden">
      {/* Hero — one composition: brand, line, CTA, full-bleed product plane */}
      <section className="relative isolate min-h-svh overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_55%),linear-gradient(180deg,var(--background)_0%,color-mix(in_oklch,var(--primary)_6%,var(--background))_42%,var(--background)_100%)]"
        />
        <div
          aria-hidden
          className="landing-grid-drift pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(color-mix(in_oklch,var(--foreground)_8%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklch,var(--foreground)_8%,transparent)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        />

        <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col px-4 pt-28 md:px-6 md:pt-32">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="landing-hero-in font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              OrcaFrame
            </p>
            <h1 className="landing-hero-in landing-hero-in-delay-1 mt-5 font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl">
              The data operations layer for asset-heavy businesses.
            </h1>
            <p className="landing-hero-in landing-hero-in-delay-2 mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Collect, clean, and surface operational data in live dashboards—so teams stop
              managing spreadsheets and start running the business.
            </p>
            <div className="landing-hero-in landing-hero-in-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <a href="mailto:sales@orcaframe.com">
                  Book a discovery call
                  <ArrowRightIcon data-icon="inline-end" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View pricing</Link>
              </Button>
            </div>
          </div>

          <div className="landing-hero-in landing-hero-in-delay-4 relative mt-14 flex-1 md:mt-16">
            <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-transparent to-background/40" />
            <div className="relative mx-auto aspect-[16/10] w-full max-w-5xl overflow-hidden ring-1 ring-foreground/10">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="size-full origin-top scale-[0.92] sm:scale-100">
                <AnalyticsDashboard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-border/80 bg-muted/30 py-10">
        <div
          data-reveal
          className="landing-reveal mx-auto flex max-w-3xl justify-center px-4"
        >
          <LogoCloud className="w-full" />
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-4 py-24 text-center md:px-6 md:py-32">
        <h2
          data-reveal
          className="landing-reveal font-heading text-3xl font-semibold tracking-tight md:text-4xl"
        >
          From scattered sources to a trusted operating picture.
        </h2>
        <p
          data-reveal
          className="landing-reveal landing-reveal-delay-1 mt-4 text-base text-muted-foreground md:text-lg"
        >
          OrcaFrame sits between your systems and your decisions—unifying industrial,
          logistics, and field data into one place your team can act on every day.
        </p>
      </section>

      <Separator />

      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            data-reveal
            className="landing-reveal font-heading text-3xl font-semibold tracking-tight md:text-4xl"
          >
            The full data cycle
          </h2>
          <p
            data-reveal
            className="landing-reveal landing-reveal-delay-1 mt-3 text-muted-foreground"
          >
            Three moves from chaos to clarity—without another BI project that never ships.
          </p>
        </div>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li
              key={step.title}
              data-reveal
              className="landing-reveal flex flex-col gap-4"
              style={{ transitionDelay: `${0.08 * (index + 1)}s` }}
            >
              <step.icon
                className="size-8 text-primary"
                weight="duotone"
                aria-hidden
              />
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Separator />

      <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            data-reveal
            className="landing-reveal font-heading text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Transparent pricing
          </h2>
          <p
            data-reveal
            className="landing-reveal landing-reveal-delay-1 mt-3 text-muted-foreground"
          >
            Setup once. Operate monthly. Scale when the data estate grows.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              data-reveal
              className={`landing-reveal ${plan.featured ? "ring-2 ring-primary" : ""}`}
              style={{ transitionDelay: `${0.08 * (index + 1)}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-base font-semibold">{plan.name}</CardTitle>
                  {plan.featured ? <Badge>Most popular</Badge> : null}
                </div>
                <CardDescription>
                  <span className="mt-3 block font-heading text-3xl font-semibold tracking-tight text-foreground tabular-nums">
                    {plan.setup}
                  </span>
                  <span className="mt-1 block text-muted-foreground">
                    setup · {plan.monthly}
                    {plan.monthly.startsWith("$") ? "/mo" : ""}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-primary" aria-hidden>
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                  asChild
                >
                  <a href="mailto:sales@orcaframe.com">Talk to sales</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative border-t border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_120%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent_60%)]"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center md:px-6 md:py-32">
          <h2
            data-reveal
            className="landing-reveal font-heading text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Your data deserves better than spreadsheets.
          </h2>
          <p
            data-reveal
            className="landing-reveal landing-reveal-delay-1 text-muted-foreground"
          >
            Tell us how operations run today—we’ll map the path to a live OrcaFrame layer.
          </p>
          <div data-reveal className="landing-reveal landing-reveal-delay-2">
            <Button size="lg" asChild>
              <a href="mailto:sales@orcaframe.com">
                Book a discovery call
                <ArrowRightIcon data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
