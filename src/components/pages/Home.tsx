"use client";

import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/ui/timeline";
import { LogoCloud } from "@/components/ui/logo-cloud";
import { Compare } from "@/components/ui/compare";
import { PinContainer } from "@/components/ui/3d-pin";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ParallaxLayer } from "@/components/ui/parallax-layer";
import { Database, Server, Share2Icon, Rocket, TrendingUp, Building2, LayoutDashboard } from "lucide-react";
import Integrations from "@/components/ui/integrations";
import DataEngineerImg from "@/assets/images/text_7901387.png";
import DataEngineerDockImg from "@/assets/images/data-engineer.png";
import CodeLightImg from "@/assets/images/1.png";
import CodeDarkImg from "@/assets/images/2.png";
import DashboardsImg from "@/assets/images/New_Power_BI_Logo.svg";
import PricingImg from "@/assets/images/9ab41cbbb7784d985cbe0ab37f4adaef.png";
import ApiDarkImg from "@/assets/images/3.png";
import ApiLightImg from "@/assets/images/4.png";
import AwsImg from "@/assets/images/aws-svgrepo-com.svg";
import AwsColorImg from "@/assets/images/aws-color.png";
import AzureImg from "@/assets/images/azure-svgrepo-com.svg";
import JavaScriptLogoImg from "@/assets/images/JavaScript-logo.png";
import ExcelImg from "@/assets/images/Microsoft_Office_Excel_(2019–2025).svg";
import ErpImg from "@/assets/images/Google Sheets Icons.png";
import ChaosDataImg from "@/assets/images/4.svg";
import OrcaframeLogo01 from "@/assets/logo/01.png";

import { GridBackground } from "@/components/ui/grid-background-demo";
import { assetSrc } from "@/lib/asset";

const AnalyticsDashboard = React.lazy(
  () => import("@/components/dashboard/AnalyticsDashboard")
);

const DashboardIllustrationCard = () => (
  <div className="relative w-full max-w-sm rounded-3xl border bg-gradient-to-br from-primary/10 via-primary/5 to-primary/20 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.35)] dark:from-primary/15 dark:via-primary/5 dark:to-primary/25">
    <div className="grid gap-3">
      <div className="h-24 rounded-2xl bg-white/90 p-4 shadow-sm dark:bg-slate-900/80">
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span>Executive Overview</span>
          <span className="text-primary font-medium">Live</span>
        </div>
        <div className="flex h-12 items-end gap-1">
          {[40, 60, 45, 80, 70, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-full bg-gradient-to-t from-primary/40 to-primary"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex-1 rounded-2xl bg-white/90 p-3 text-xs shadow-sm dark:bg-slate-900/80">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-muted-foreground">On-time delivery</span>
            <span className="text-emerald-500 font-semibold">+12%</span>
          </div>
          <div className="mt-1 h-1.5 rounded-full bg-muted">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary to-emerald-500" />
          </div>
        </div>

        <div className="flex-1 rounded-2xl bg-white/90 p-3 text-xs shadow-sm dark:bg-slate-900/80">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-muted-foreground">Data freshness</span>
            <span className="text-primary font-semibold">5 min</span>
          </div>
          <div className="mt-1 flex items-center gap-1">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] text-muted-foreground">Streaming</span>
          </div>
        </div>
      </div>
    </div>

    <div className="pointer-events-none absolute -top-3 right-6 h-3 w-3 rounded-full bg-primary/40 blur-[1px]" />
    <div className="pointer-events-none absolute -bottom-4 left-8 h-4 w-4 rounded-full bg-sky-400/60 blur-[1px]" />
    <div className="pointer-events-none absolute -top-6 left-6 h-5 w-5 rounded-full bg-primary/30 blur-[2px]" />
  </div>
);

const IntegrationsIcon = ({ className }: { className?: string }) => (
  <img src={assetSrc(DataEngineerDockImg)} alt="Integrations icon" className={className} />
);

const DashboardIcon = ({ className }: { className?: string }) => (
  <img src={assetSrc(DashboardsImg)} alt="Dashboard icon" className={className} />
);

export default function Home() {
  const iconPositions = [
    { top: "15%", left: "50%" },//pdf
    { top: "32%", left: "25%" },//code
    { top: "60%", left: "40%" },//google sheets
    { top: "85%", left: "30%" },//sql
    { top: "45%", left: "68%" },//api
    { top: "110%", left: "45%" },//excel
  ];

  const [isDashboardHover, setIsDashboardHover] = React.useState(false);

  const fullCycleContent = [
    {
      title: "Connect your data sources",
      description:
        "All your PDFs, spreadsheets, APIs, and operational systems start flowing into Orcaframe.",
      content: (
        <div className="h-full w-full">
          <Integrations />
        </div>
      ),
    },
    {
      title: "Centralize in Orcaframe",
      description:
        "Orcaframe becomes your single, trusted data layer across teams and tools.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={assetSrc(OrcaframeLogo01)}
            alt="Orcaframe logo"
            className="h-64 w-64 object-contain"
          />
        </div>
      ),
    },
    {
      title: "See it all in live dashboards",
      description:
        "Real-time, interactive dashboards give your team a new daily home page for decisions.",
      content: <DashboardIllustrationCard />,
    },
  ];

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = document.querySelectorAll<HTMLElement>(
      '[data-animate="hero-fade"]'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.remove("opacity-0");
            el.classList.add("animate-hero-fade-up");
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* ================= HERO WITH FULL-WIDTH BACKGROUND ================= */}
      <GridBackground className="pt-32 pb-24">
        <section className="relative max-w-4xl mx-auto px-4 pt-28 md:pt-36 lg:pt-40 pb-40 lg:pb-10 text-center">
        <p
          data-animate="hero-fade"
          className="text-xs uppercase tracking-wider text-muted-foreground mb-4 opacity-0 hero-fade-distance-1"
          style={{ animationDelay: "0s" }}
        >
          Data Services & Consulting
        </p>

        <h1
          data-animate="hero-fade"
          className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.05] mb-6 opacity-0 hero-fade-distance-2"
          style={{ animationDelay: "0.14s" }}
        >
          Your Partner in <span className="text-primary">Data Excellence.</span>
        </h1>

        <p
          data-animate="hero-fade"
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 hero-fade-distance-3"
          style={{ animationDelay: "0.28s" }}
        >
          We turn scattered, siloed data into clear, decision-ready insights. Orcaframe
          handles the full journey—from collection and cleaning to deep analysis and
          live dashboards.
        </p>

        <div
          data-animate="hero-fade"
          className="flex items-center justify-center gap-3 flex-wrap opacity-0 hero-fade-distance-4"
          style={{ animationDelay: "0.42s" }}
        >
          <a href="mailto:sales@orcaframe.com">
            <Button className="px-6">Book a Discovery Call</Button>
          </a>
          <a href="#pricing">
            <Button
              variant="outline"
              className="px-6 border-primary text-primary hover:bg-primary/10"
            >
              View Pricing
            </Button>
          </a>
        </div>

        <p
          data-animate="hero-fade"
          className="text-md text-muted-foreground mt-4 pt-6 opacity-0 hero-fade-distance-5"
          style={{ animationDelay: "0.56s" }}
        >
          Your data deserves better than spreadsheets.
        </p>
        </section>
      </GridBackground>

      <div className="w-full my-16 border-y">
        <div
          data-animate="hero-fade"
          className="max-w-6xl mx-auto px-4 flex justify-center opacity-0 hero-fade-distance-1"
          style={{ animationDelay: "0.1s" }}
        >
          <LogoCloud className="w-full max-w-3xl" />
        </div>
      </div>

      {/* ================= WHO WE ARE ================= */}
      <section id="who-we-are" className="max-w-6xl mx-auto px-4 pt-16 pb-22">
        <Timeline
          data={[
            {
              title: "Collect",
              content: (
                <div
                  data-animate="hero-fade"
                  className="space-y-1 text-muted-foreground opacity-0 hero-fade-distance-1"
                  style={{ animationDelay: "0.1s" }}
                >
                  <p className="font-medium text-primary text-sm">1. Collect</p>
                  <p className="text-base md:text-lg">
                    We pull in all your data—ERPs, CRMs, sensors, spreadsheets, APIs, and
                    more.
                  </p>
                </div>
              ),
            },
            {
              title: "Clean & Analyze",
              content: (
                <div
                  data-animate="hero-fade"
                  className="space-y-1 text-muted-foreground opacity-0 hero-fade-distance-1"
                  style={{ animationDelay: "0.2s" }}
                >
                  <p className="font-medium text-primary text-sm">2. Clean & Analyze</p>
                  <p className="text-base md:text-lg">
                    We fix errors, uncover patterns, and predict risks with advanced
                    analytics.
                  </p>
                </div>
              ),
            },
            {
              title: "Deliver",
              content: (
                <div
                  data-animate="hero-fade"
                  className="space-y-1 text-muted-foreground opacity-0 hero-fade-distance-1"
                  style={{ animationDelay: "0.3s" }}
                >
                  <p className="font-medium text-primary text-sm">3. Deliver</p>
                  <p className="text-base md:text-lg">
                    We build real-time interactive dashboards that become your team's home
                    page.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </section>

      {/* ================= DASHBOARDS ================= */}
      <section
        id="dashboards"
        className="max-w-6xl mx-auto px-4 pt-14 pb-24 lg:pb-60"
      >
        <ParallaxLayer strength={100}>
          <div>
            <TextGenerateEffect
              words="Your New Daily Home Page"
              className={`mb-6 pb-24 text-center transform transition-all duration-500 ${
                isDashboardHover ? "-translate-y-20 opacity-85" : ""
              }`}
              textClassName="text-5xl font-semibold"
            />

            {/* Mobile: show only the Analytics dashboard */}
            <div className="mt-6 md:hidden">
              <Suspense
                fallback={
                  <div className="mt-6 grid gap-4">
                    <div className="h-40 rounded-2xl bg-muted animate-pulse" />
                    <div className="h-32 rounded-2xl bg-muted animate-pulse" />
                  </div>
                }
              >
                <div className="w-full max-w-[1120px] mx-auto aspect-[3/4] rounded-2xl shadow-[-18px_28px_64px_rgba(15,23,42,0.9),0_0_0_1px_rgba(30,64,175,0.7)] overflow-hidden bg-background">
                  <AnalyticsDashboard />
                </div>
              </Suspense>
            </div>

            {/* Desktop: keep the Compare component */}
            <div className="mt-6 hidden md:block">
              <PinContainer
                title="Analytics Dashboard"
                href="#dashboards"
                containerClassName="flex justify-center"
                onHoverChange={setIsDashboardHover}
              >
                <Suspense
                  fallback={
                    <div className="mt-6 grid gap-4">
                      <div className="h-40 rounded-2xl bg-muted animate-pulse" />
                      <div className="h-32 rounded-2xl bg-muted animate-pulse" />
                    </div>
                  }
                >
                  <Compare
                    className="w-full max-w-[1120px] aspect-[3/4] md:w-[1120px] md:h-[738px] md:aspect-auto rounded-2xl shadow-[-18px_28px_64px_rgba(15,23,42,0.9),0_0_0_1px_rgba(30,64,175,0.7)]"
                    firstContent={
                      <div className="w-full h-full overflow-hidden rounded-2xl bg-background">
                        <AnalyticsDashboard />
                      </div>
                    }
                    secondImage={assetSrc(ChaosDataImg)}
                    slideMode="hover"
                    initialSliderPercentage={50}
                    autoplay={false}
                  />
                </Suspense>
              </PinContainer>
            </div>
          </div>
        </ParallaxLayer>
      </section>

      {/* ================= FULL CYCLE ================= */}
      <section id="full-cycle" className="max-w-6xl mx-auto px-4 py-16">
        <h2
          data-animate="hero-fade"
          className="text-5xl font-semibold mb-24 text-center opacity-0 hero-fade-distance-1"
          style={{ animationDelay: "0.1s" }}
        >
          The Full Data Cycle
        </h2>

        <div className="mt-6 grid gap-3">
          {/* Row 1: Integrations + text */}
          <div className="grid lg:grid-cols-5 items-stretch gap-3">
            {/* Integrations (left, narrower) */}
            <div className="lg:col-span-2 group relative overflow-hidden rounded-2xl p-8 flex flex-col gap-4 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">
              <Share2Icon className="h-10 w-10 text-primary" />
              <div className="flex-1 flex items-center justify-center">
                <div className="h-60 w-full max-w-md overflow-hidden rounded-md flex items-center justify-center transition-transform duration-200 group-hover:-translate-y-1">
                  <Integrations />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/15" />
            </div>

            {/* Paragraph (right, wider) */}
            <div className="lg:col-span-3 group relative overflow-hidden border border-border/100 rounded-2xl p-8 flex flex-col gap-4 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">
              <Database className="h-10 w-10 text-primary" />
              <div
                data-animate="hero-fade"
                className="space-y-4 text-center lg:text-left mt-10 md:mt-14 opacity-0 hero-fade-distance-1 transition-transform duration-200 group-hover:-translate-y-1"
                style={{ animationDelay: "0.15s" }}
              >
                <p className="text-lg text-muted-foreground">
                  Orcaframe handles your full data journey: collecting from scattered sources,
                  centralizing into a single trusted layer, and surfacing it all in live,
                  decision-ready dashboards.
                </p>
                <p className="text-sm text-muted-foreground">
                  PDFs, spreadsheets, APIs, and operational systems all converge here, so your
                  team can move from firefighting in spreadsheets to confident, data-driven
                  decisions.
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/15" />
            </div>
          </div>

          {/* Row 2: Dashboard visual illustration */}
          <div className="group relative overflow-hidden border border-border/100 rounded-2xl px-10 py-16 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[520px] md:min-h-0 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">
            <div
              data-animate="hero-fade"
              className="flex flex-col gap-3 w-full md:w-auto items-center md:items-start text-center md:text-left opacity-0 hero-fade-distance-1"
              style={{ animationDelay: "0.2s" }}
            >
              <LayoutDashboard className="h-10 w-10 text-primary self-start md:self-auto" />
              <p className="text-lg md:text-2xl font-medium uppercase tracking-wide text-primary">
                Executive Dashboard
              </p>
              <p className="text-xl md:text-3xl font-semibold text-foreground">
                Live Data Streaming
              </p>
            </div>

            <div className="w-full max-w-md flex items-center justify-center transition-transform duration-200 group-hover:-translate-y-1">
              <DashboardIllustrationCard />
            </div>

            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/15" />
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-24 mb-24">
        <h2
          data-animate="hero-fade"
          className="text-5xl font-semibold mb-24 text-center opacity-0 hero-fade-distance-1"
          style={{ animationDelay: "0.1s" }}
        >
          Transparent Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* STARTER */}
          <Card className="flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <CardHeader className="text-center pb-8">
              <div
                data-animate="hero-fade"
                className="opacity-0 hero-fade-distance-1"
                style={{ animationDelay: "0.15s" }}
              >
                <CardTitle className="text-2xl font-bold mb-4">Starter</CardTitle>
                <div className="space-y-2">
                  <div className="text-5xl lg:text-6xl font-bold text-foreground">
                    $4,999
                  </div>
                  <div className="text-lg text-muted-foreground font-medium">Setup</div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">
                    $299
                  </div>
                  <div className="text-lg text-muted-foreground font-medium">/month</div>
                </div>
              </div>
              <Rocket className="h-8 w-8 text-primary mx-auto mt-4" />
            </CardHeader>
            <CardContent
              data-animate="hero-fade"
              className="flex-1 opacity-0 hero-fade-distance-2"
              style={{ animationDelay: "0.25s" }}
            >
              <ul className="space-y-3 text-base">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>1–2 data sources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>1 multi-page dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Maintenance included</span>
                </li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Button className="w-full h-12 text-lg" asChild>
                <a href="mailto:sales@orcaframe.com">Talk to Sales</a>
              </Button>
            </div>
          </Card>

          {/* GROWTH */}
          <Card className="flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-primary shadow-xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/80"></div>
            <CardHeader className="text-center pb-8">
              <div
                data-animate="hero-fade"
                className="opacity-0 hero-fade-distance-1"
                style={{ animationDelay: "0.2s" }}
              >
                <Badge className="w-fit mx-auto mb-4 px-4 py-2 text-sm font-semibold">Most Popular</Badge>
                <CardTitle className="text-2xl font-bold mb-4">Growth</CardTitle>
                <div className="space-y-2">
                  <div className="text-5xl lg:text-6xl font-bold text-foreground">
                    $8,999
                  </div>
                  <div className="text-lg text-muted-foreground font-medium">Setup</div>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">
                    $599
                  </div>
                  <div className="text-lg text-muted-foreground font-medium">/month</div>
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-primary mx-auto mt-4" />
            </CardHeader>
            <CardContent
              data-animate="hero-fade"
              className="flex-1 opacity-0 hero-fade-distance-2"
              style={{ animationDelay: "0.3s" }}
            >
              <ul className="space-y-3 text-base">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>3–5 data sources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>2 multi-page dashboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>Full maintenance plan</span>
                </li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Button className="w-full h-12 text-lg" asChild>
                <a href="mailto:sales@orcaframe.com">Talk to Sales</a>
              </Button>
            </div>
          </Card>

          {/* ENTERPRISE */}
          <Card className="flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-[#1C1C1C] via-[#07357B] to-[#1C1C1C] border-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <CardHeader className="text-center pb-8">
              <div
                data-animate="hero-fade"
                className="opacity-0 hero-fade-distance-1"
                style={{ animationDelay: "0.25s" }}
              >
                <CardTitle className="text-2xl font-bold mb-4 text-white">Enterprise</CardTitle>
                <div className="space-y-2">
                  <div className="text-5xl lg:text-6xl font-bold text-white">
                    Custom
                  </div>
                  <div className="text-lg text-slate-200 font-medium">Quote</div>
                </div>
              </div>
              <Building2 className="h-8 w-8 text-slate-100 mx-auto mt-4" />
            </CardHeader>
            <CardContent
              data-animate="hero-fade"
              className="flex-1 opacity-0 hero-fade-distance-2"
              style={{ animationDelay: "0.35s" }}
            >
              <ul className="space-y-3 text-base text-slate-100">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">✓</span>
                  <span>Full data stack audit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">✓</span>
                  <span>Tailored architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">✓</span>
                  <span>Custom dashboards & SLAs</span>
                </li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Button
                variant="outline"
                className="w-full h-12 text-lg bg-white text-slate-900 hover:bg-slate-100 border-transparent"
                asChild
              >
                <a href="mailto:sales@orcaframe.com">Talk to Sales</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div
            data-animate="hero-fade"
            className="opacity-0 hero-fade-distance-1"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="text-5xl font-semibold mb-2 text-center lg:text-left">
              Your data deserves better than {""}
              <span className="text-[#1B72FF]">spreadsheets.</span>
            </h2>
            <p className="text-sm opacity-90">
              Book a 15-minute discovery call and see how Orcaframe centralizes,
              cleans, and visualizes your operational data.
            </p>
          </div>

          <div
            data-animate="hero-fade"
            className="flex flex-col items-start gap-2 pt-26 opacity-0 hero-fade-distance-2"
            style={{ animationDelay: "0.1s" }}
          >
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
