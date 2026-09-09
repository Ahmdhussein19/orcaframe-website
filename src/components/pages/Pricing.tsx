"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* =============== HERO / OVERVIEW =============== */}
        <section className="max-w-6xl mx-auto pt-24 pb-16 lg:pt-40 lg:pb-24 text-center">
          <Badge variant="outline" className="mb-3 rounded-sm">
            Pricing
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
            Implementation plans that match your data maturity.
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every plan includes end-to-end implementation, from source mapping
            and modeling to dashboard delivery. Choose the level that fits your
            current footprint and scale as you grow.
          </p>
        </section>

        {/* =============== PLANS =============== */}
        <section className="max-w-6xl mx-auto px-4 pb-16 lg:pb-20">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* STARTER */}
            <Card className="flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-4">Starter</CardTitle>
                <div className="space-y-2">
                  <div className="text-5xl lg:text-6xl font-bold text-foreground">
                    $4,999
                  </div>
                  <div className="text-lg text-muted-foreground font-medium">setup</div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">
                    $299
                  </div>
                  <div className="text-lg text-muted-foreground font-medium">/month</div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-base text-foreground mb-6 text-center">
                  Ideal for teams taking their first step away from spreadsheets
                  into a unified dashboard.
                </p>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>1–2 core data sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>1 multi-page operational dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Automated refresh & quality checks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full h-12 text-lg" asChild>
                  <a href="mailto:sales@orcaframe.com?subject=Starter Plan Enquiry">
                    Talk to Sales
                  </a>
                </Button>
              </div>
            </Card>

            {/* GROWTH */}
            <Card className="flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-primary shadow-xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/80"></div>
              <CardHeader className="text-center pb-8">
                <Badge className="w-fit mx-auto mb-4 px-4 py-2 text-sm font-semibold">Most Popular</Badge>
                <CardTitle className="text-2xl font-bold mb-4">Growth</CardTitle>
                <div className="space-y-2">
                  <div className="text-5xl lg:text-6xl font-bold text-foreground">
                    $8,999
                  </div>
                  <div className="text-lg text-muted-foreground font-medium">setup</div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">
                    $599
                  </div>
                  <div className="text-lg text-muted-foreground font-medium">/month</div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-base text-foreground mb-6 text-center">
                  For scaling businesses that need multi-site visibility,
                  stronger governance, and executive-ready views.
                </p>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>3–5 integrated data sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>2 multi-page dashboards (ops + leadership)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Data quality & metric definitions baseline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Priority support & quarterly optimization</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full h-12 text-lg" asChild>
                  <a href="mailto:sales@orcaframe.com?subject=Growth Plan Enquiry">
                    Talk to Sales
                  </a>
                </Button>
              </div>
            </Card>

            {/* ENTERPRISE */}
            <Card className="flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-4">Enterprise</CardTitle>
                <div className="space-y-2">
                  <div className="text-5xl lg:text-6xl font-bold text-foreground">
                    Custom
                  </div>
                  <div className="text-lg text-muted-foreground font-medium">pricing</div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-base text-foreground mb-6 text-center">
                  For complex, multi-entity, or regulated environments that need
                  a tailored data backbone.
                </p>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Full data stack & KPI audit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Custom architecture & data models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Multiple role-based dashboard suites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>SLAs, training, and ongoing co-design</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full h-12 text-lg" variant="outline" asChild>
                  <a href="mailto:sales@orcaframe.com?subject=Enterprise Enquiry">
                    Request a Custom Proposal
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* =============== WHAT'S INCLUDED =============== */}
        <section className="max-w-6xl mx-auto px-4 pb-16 lg:pb-20">
          <h2 className="text-5xl font-semibold mb-4 text-center">
            What every Orcaframe engagement includes
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-8">
            Regardless of plan, you get a full, end-to-end delivery — not just a
            dashboard dropped on top of messy data.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Data mapping & source alignment
                </CardTitle>
              </CardHeader>
              <CardContent>
                We map your systems, KPIs, and processes, and define what a
                &quot;single source of truth&quot; means for your business.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Modeling & quality layer</CardTitle>
              </CardHeader>
              <CardContent>
                Your data is cleaned, standardized, and modeled so metrics are
                consistent across teams and dashboards.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">
                  Production-ready dashboards
                </CardTitle>
              </CardHeader>
              <CardContent>
                Dashboards are designed with real users, load quickly, and become
                part of the daily operating rhythm.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* =============== FAQ =============== */}
        <section className="max-w-6xl mx-auto px-4 pb-16 lg:pb-24">
          <h2 className="text-5xl font-semibold mb-6 text-center">
            Pricing FAQ
          </h2>

          <div className="space-y-6 text-sm text-muted-foreground max-w-3xl mx-auto">
            <div>
              <h3 className="font-medium text-foreground mb-1">
                How long does a typical implementation take?
              </h3>
              <p>
                Most Starter and Growth implementations are delivered in 4–8
                weeks, depending on data complexity, number of sources, and
                dashboard scope.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-foreground mb-1">
                What happens after go-live?
              </h3>
              <p>
                The monthly fee covers monitoring, maintenance, minor
                enhancements, and support. For Enterprise, we also schedule
                regular reviews and roadmap sessions.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-foreground mb-1">
                Can we start small and upgrade later?
              </h3>
              <p>
                Yes. Many clients start with a Starter or Growth deployment for
                a critical business area, then scale to additional sites, teams,
                or data sources once value is proven.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-foreground mb-1">
                Do you work with our internal data team?
              </h3>
              <p>
                Absolutely. We often co-design with in-house data teams, leaving
                behind models, documentation, and patterns they can extend.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* =============== FOOTER CTA =============== */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-5xl font-semibold mb-2">
              Not sure which plan fits best?
            </h2>
            <p className="text-sm opacity-90">
              Share your tech stack and top three KPIs, and we&apos;ll recommend
              a concrete implementation path — no obligation.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 pt-12">
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
