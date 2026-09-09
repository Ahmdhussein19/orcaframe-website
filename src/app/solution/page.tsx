import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Solution",
  description:
    "From raw data to real-time, decision-ready insight—OrcaFrame's end-to-end data operations layer.",
};

export default function SolutionPage() {
  return (
    <div className="min-h-screen">
      <main className="px-4 lg:px-[250px]">
        {/* =============== HERO =============== */}
        <section className="w-full pt-24 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-3">
              The Orcaframe Solution
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              From Raw Data to Real-Time, Decision-Ready Insight.
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Orcaframe is an end-to-end data operations layer for industrial,
              logistics, and asset-heavy businesses. We connect your systems,
              clean and model your data, and deliver the dashboards your teams
              actually use every day.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="px-6">
                <a href="mailto:sales@orcaframe.com">Talk to our team</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-6 border-primary text-primary hover:bg-primary/10"
              >
                <a href="/#pricing">See implementation options</a>
              </Button>
            </div>
          </div>
        </section>

        {/* =============== PROBLEMS WE SOLVE =============== */}
        <section className="w-full pb-16 lg:pb-20">
          <h2 className="text-5xl font-semibold mb-4">
            Problems We Solve
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8">
            Most teams are drowning in spreadsheets, siloed systems, and manual
            reporting. Orcaframe replaces that with a single, reliable data
            backbone.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Scattered, siloed data</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Data lives in ERPs, CRMs, Excel files, sensors, and emails —
                making it impossible to get a single, trusted view of operations.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Manual & late reporting
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Analysts spend days copying, fixing, and merging sheets. By the
                time a report is ready, it&apos;s already outdated.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  No common &quot;source of truth&quot;
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Different teams use different numbers, causing conflicting
                dashboards, misaligned decisions, and endless debates.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Hidden risks & blind spots
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Without consistent data, it&apos;s hard to see downtime risk,
                under-performing assets, or delays before they hit the bottom
                line.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Dashboards nobody opens
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Legacy dashboards are too slow, too complex, or not tailored to
                how people actually work — so they get ignored.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Data talent spread too thin
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Your best analysts are stuck doing data plumbing instead of
                driving insights and strategy.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* =============== HOW IT WORKS =============== */}
        <section className="w-full pb-16 lg:pb-20">
          <h2 className="text-5xl font-semibold mb-4">
            How Orcaframe Works
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8">
            Our solution is a combination of architecture, services, and
            dashboards — delivered as a managed data layer for your business.
          </p>

          <div className="grid lg:grid-cols-4 gap-4 text-sm text-muted-foreground">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-primary">
                  1. Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                We integrate ERPs, CRMs, IoT sensors, spreadsheets, and cloud
                tools into a unified data pipeline tailored to your stack.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-primary">
                  2. Clean & Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                We standardize formats, fix errors, define business rules, and
                build reusable data models around your key entities.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-primary">
                  3. Analyze
                </CardTitle>
              </CardHeader>
              <CardContent>
                We layer on analytics and risk indicators: production trends,
                downtime risk, SLA breaches, and more — aligned with your KPIs.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-primary">
                  4. Deliver
                </CardTitle>
              </CardHeader>
              <CardContent>
                We ship interactive dashboards (Power BI or web) that become
                your new daily home page — with ongoing support and iteration.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* =============== SOLUTION MODULES =============== */}
        <section className="w-full pb-16 lg:pb-20">
          <h2 className="text-5xl font-semibold mb-4">
            Solution Modules
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8">
            Each Orcaframe deployment is built from a set of modules that we
            combine based on your maturity, industry, and priorities.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <Card>
              <CardHeader>
                <CardTitle>Data Integration & Ingestion</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Connect ERPs, CRMs, IoT devices, spreadsheets, APIs.</li>
                  <li>Secure, audited data pipelines.</li>
                  <li>Batch or near real-time updates depending on needs.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Quality & Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Business rules for validation and deduplication.</li>
                  <li>Single definition of key metrics and dimensions.</li>
                  <li>Monitoring for data freshness and anomalies.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics & Risk Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Production, throughput, and asset performance trends.</li>
                  <li>Downtime risk, delays, and SLA early warnings.</li>
                  <li>Custom models aligned with your operating model.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dashboards & Enablement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Power BI or web dashboards for every level of the org.</li>
                  <li>Role-based access and tailored views.</li>
                  <li>Training for your team to interpret and act on data.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* =============== USE CASES =============== */}
        <section className="w-full pb-16 lg:pb-20">
          <h2 className="text-5xl font-semibold mb-4">
            Example Use Cases
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8">
            While every deployment is tailored, most projects fall into a few
            repeatable patterns.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Multi-site production visibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                See output, downtime, and efficiency across all sites in one
                live dashboard — with drill-downs to lines, shifts, and assets.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Logistics & fleet control tower
                </CardTitle>
              </CardHeader>
              <CardContent>
                Combine telematics, WMS/TMS, and operations data to monitor OTIF
                performance, route delays, and asset utilization.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Executive performance cockpit
                </CardTitle>
              </CardHeader>
              <CardContent>
                A single, curated view of the metrics leadership needs daily:
                revenue, volume, risk, and operational health.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* =============== IMPLEMENTATION =============== */}
        <section className="w-full pb-16 lg:pb-24">
          <h2 className="text-5xl font-semibold mb-4">
            Implementation at a Glance
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8">
            We move fast, but in a structured way. A typical Orcaframe
            deployment takes 4–8 weeks depending on scope and data complexity.
          </p>

          <div className="grid md:grid-cols-4 gap-4 text-sm text-muted-foreground">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Week 1</CardTitle>
              </CardHeader>
              <CardContent>
                Discovery, system mapping, KPI alignment, and success criteria.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Weeks 2–3</CardTitle>
              </CardHeader>
              <CardContent>
                Data integration, quality checks, and model design.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Weeks 4–5</CardTitle>
              </CardHeader>
              <CardContent>
                Dashboard build, iteration with your team, and user testing.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Week 6+</CardTitle>
              </CardHeader>
              <CardContent>
                Go-live, training, and ongoing optimization based on real usage.
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* =============== FOOTER CTA =============== */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-5xl font-semibold mb-2">
              Ready to turn your data into a strategic asset?
            </h2>
            <p className="text-sm opacity-90">
              Share a bit about your stack and operations, and we&apos;ll show
              you a concrete Orcaframe blueprint for your business.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 pt-26">
            <a href="mailto:sales@orcaframe.com" className="text-sm underline">
              sales@orcaframe.com
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Orcaframe — All rights reserved.
      </footer>
    </div>
  );
}
