"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, CreditCard, TrendingUp } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";
const metricCards = [
  {
    label: "Earnings",
    value: "$350.4",
    subtitle: "This month",
    delta: "+2.45%",
    deltaClass: "text-emerald-500",
    icon: DollarSign,
  },
  {
    label: "Spend this month",
    value: "$642.39",
    subtitle: "Operational spend",
    delta: "+1.24%",
    deltaClass: "text-emerald-500",
    icon: CreditCard,
  },
  {
    label: "Sales",
    value: "$574.34",
    subtitle: "Since last week",
    delta: "+3.29%",
    deltaClass: "text-emerald-500",
    icon: TrendingUp,
  },
];

const mainLineConfig: ChartConfig = {
  spent: {
    label: "Spent",
    color: "var(--chart-1)",
  },
  budget: {
    label: "Budget",
    color: "var(--chart-2)",
  },
};

// Spent vs Budget over time with a clear gap between the two lines
const mainLineData = [
  { month: "SEP", spent: 20_000, budget: 33_000 },
  { month: "OCT", spent: 36_000, budget: 37_200 },
  { month: "NOV", spent: 24_000, budget: 34_000 },
  { month: "DEC", spent: 34_000, budget: 20_000 },
  { month: "JAN", spent: 28_500, budget: 39_500 },
  { month: "FEB", spent: 40_000, budget: 20_500 },
];

const weeklyRevenueConfig: ChartConfig = {
  pipeline: {
    label: "Pipeline",
    color: "hsl(var(--chart-2))",
  },
  services: {
    label: "Services",
    color: "hsl(var(--chart-3))",
  },
  support: {
    label: "Support",
    color: "hsl(var(--chart-4))",
  },
};

const weeklyRevenueData = [
  { day: 17, pipeline: 40, services: 24, support: 16 },
  { day: 18, pipeline: 44, services: 26, support: 18 },
  { day: 19, pipeline: 46, services: 28, support: 19 },
  { day: 20, pipeline: 48, services: 30, support: 20 },
  { day: 21, pipeline: 50, services: 32, support: 22 },
  { day: 22, pipeline: 47, services: 29, support: 19 },
  { day: 23, pipeline: 49, services: 31, support: 20 },
  { day: 24, pipeline: 52, services: 33, support: 22 },
  { day: 25, pipeline: 54, services: 35, support: 23 },
];

const trafficConfig: ChartConfig = {
  visitors: {
    label: "Visitors",
    color: "#1d4ed8",
  },
};

const trafficData = [
  { day: "Mon", visitors: 2_000 },
  { day: "Tue", visitors: 2_300 },
  { day: "Wed", visitors: 2_100 },
  { day: "Thu", visitors: 2_450 },
  { day: "Fri", visitors: 2_800 },
  { day: "Sat", visitors: 1_900 },
  { day: "Sun", visitors: 1_750 },
];

const trafficPieConfig: ChartConfig = {
  direct: {
    label: "Direct",
    color: "#1d4ed8",
  },
  referral: {
    label: "Referral",
    color: "#3b82f6",
  },
  social: {
    label: "Social",
    color: "#93c5fd",
  },
};

const trafficPieData = [
  { key: "direct", value: 42 },
  { key: "referral", value: 32 },
  { key: "social", value: 26 },
];

const checkTableRows = [
  { name: "Item 1", progress: "17.5%", quantity: 2458, date: "24.Jun.2021" },
  { name: "Item 2", progress: "10.8%", quantity: 1485, date: "12.Jun.2021" },
  { name: "Item 3", progress: "21.3%", quantity: 1024, date: "06.Jun.2021" },
  { name: "Item 4", progress: "14.2%", quantity: 864, date: "29.May.2021" },
];

export default function AnalyticsDashboard() {
  return (
    <div className="mx-auto max-w-[1169px] h-full overflow-y-auto md:overflow-visible">
      <div className="rounded-2xl border bg-card/80 shadow-lg px-3 py-3 flex flex-col gap-2">
        {/* Top row: metric cards aligned with main grid (no filters) */}
        <div className="grid gap-2 items-start lg:grid-cols-[1fr_2fr]">
          {/* Left: Fourth summary card above the pie chart */}
          <div className="hidden lg:block">
            <Card className="border-muted bg-card/80 shadow-sm py-3 gap-1">
              <CardHeader className="space-y-1 pt-1">
                <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Traffic overview
                </p>
                <CardTitle className="text-xl font-semibold">Channels</CardTitle>
                <p className="text-[11px] text-muted-foreground">
                  Distribution by source
                </p>
              </CardHeader>
              <CardContent className="pt-0 pb-1" />
            </Card>
          </div>

          {/* Right: Top metric cards (above multi-line chart column) */}
          <div className="grid w-full gap-2 md:grid-cols-3 lg:grid-cols-3 shrink-0">
            {metricCards.map((card, index) => (
              <Card
                key={card.label}
                className={`border-muted bg-card/80 shadow-sm py-3 gap-1 ${
                  index === 2 ? "hidden md:block" : ""
                }`}
              >
                <CardHeader className="flex flex-row items-start justify-between space-y-0 pt-1 gap-0">
                  <div className="space-y-1 text-left">
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                      {card.label}
                    </p>
                    <CardTitle className="text-xl font-semibold">{card.value}</CardTitle>
                    {card.subtitle && (
                      <p className="text-[11px] text-muted-foreground">{card.subtitle}</p>
                    )}
                  </div>
                  {card.icon && (
                    <span className="text-muted-foreground mt-1">
                      <card.icon className="h-4 w-4" />
                    </span>
                  )}
                </CardHeader>
                {card.delta && (
                  <CardContent className="pt-0 pb-1 text-[11px] text-left">
                    <span className={card.deltaClass}>{card.delta}</span>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Middle row: main chart with pie and daily traffic (columns swapped) */}
        <div className="grid gap-2 lg:grid-cols-[1fr_2fr]">
          {/* Left: Pie chart (narrow column) */}
          <Card className="border-muted bg-card/80 shadow-sm h-full flex flex-col">
            <CardHeader className="space-y-1 pt-1 pb-0">
              <CardTitle className="text-base font-semibold">Your Pie Chart</CardTitle>
              <p className="text-xs text-muted-foreground">Traffic sources · Monthly</p>
            </CardHeader>
            <CardContent className="flex-1 min-h-0 pb-1 flex flex-col items-center justify-center gap-2">
              <ChartContainer
                config={trafficPieConfig}
                className="h-[120px] md:h-[110px] w-full aspect-auto flex items-center justify-center"
              >
                <PieChart margin={{ top: 4, bottom: 4 }}>
                  <Pie
                    data={trafficPieData}
                    dataKey="value"
                    nameKey="key"
                    innerRadius={30}
                    outerRadius={48}
                    paddingAngle={4}
                    cy="43%"
                  >
                    {trafficPieData.map((entry) => (
                      <Cell
                        key={entry.key}
                        // Use explicit blue palette from trafficPieConfig
                        fill={trafficPieConfig[entry.key].color as string}
                        stroke="transparent"
                      />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent nameKey="key" />} />
                </PieChart>
              </ChartContainer>
              <div className="flex justify-center gap-4 text-xs">
                {trafficPieData.map((entry) => (
                  <div key={entry.key} className="flex items-center gap-1">
                    <span
                      className="inline-block h-2 w-2 rounded-sm"
                      style={{
                        backgroundColor: trafficPieConfig[entry.key]
                          .color as string,
                      }}
                    />
                    <span className="text-muted-foreground capitalize">
                      {entry.key}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right: main multi-line chart (wide column) */}
          <Card className="border-muted bg-card/80 shadow-sm h-full flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                This month
              </p>
              <CardTitle className="text-2xl font-semibold">$37.5K</CardTitle>
              <p className="mt-1 text-xs text-emerald-500">+2.45% Total spent</p>
            </div>
            <div className="flex items-center gap-10 pr-4 pt-2 self-start">
              <div className="flex items-center gap-1">
                <span
                  className="inline-block h-2 w-2 rounded-sm"
                  style={{ backgroundColor: "hsl(var(--chart-1))" }}
                />
                <span className="text-xs text-muted-foreground">Spent</span>
              </div>
              <div className="flex items-center gap-1">
                <span
                  className="inline-block h-2 w-2 rounded-sm"
                  style={{ backgroundColor: "hsl(var(--chart-2))" }}
                />
                <span className="text-xs text-muted-foreground">Budget</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 min-h-0 pt-0 flex items-end">
            <ChartContainer
              config={mainLineConfig}
              className="h-[70px] md:h-[130px] w-full aspect-auto"
            >
              <LineChart
                accessibilityLayer
                data={mainLineData}
                margin={{ left: 12, right: 16, top: 0, bottom: 0 }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => String(value).slice(0, 3)}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  width={0}
                  domain={['dataMin', 'dataMax']}
                  tick={false}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="spent"
                  stroke="var(--color-spent)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="budget"
                  stroke="var(--color-budget)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        </div>

        {/* Bottom row: table + daily traffic (columns swapped) */}
        <div className="grid gap-2 lg:grid-cols-[1fr_2fr]">
          {/* Left: Daily Traffic (narrow column) */}
          <Card className="border-muted bg-card/80 shadow-sm h-full flex flex-col">
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="text-base font-semibold">Daily Traffic</CardTitle>
            <p className="text-xs text-muted-foreground">2,579 visitors · +2.45%</p>
          </CardHeader>
          <CardContent className="flex-1 min-h-0 pt-0 flex">
            <ChartContainer
              config={trafficConfig}
              className="h-[70px] md:h-full w-full aspect-auto"
            >
              <BarChart data={trafficData} margin={{ left: 4, right: 4, top: 8, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} width={32} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="visitors"
                  // Explicit primary blue for bars
                  fill={trafficConfig.visitors.color as string}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

          {/* Right: Check Table (wide column) */}
          <Card className="border-muted bg-card/80 shadow-sm h-full flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Check Table</CardTitle>
          </CardHeader>
          <CardContent className="pt-2 flex-1 min-h-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead className="text-muted-foreground">
                  <tr className="border-b border-border/60">
                    <th className="py-2 pr-2 font-normal">Name</th>
                    <th className="py-2 pr-2 font-normal">Progress</th>
                    <th className="py-2 pr-2 font-normal">Quantity</th>
                    <th className="py-2 font-normal">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {checkTableRows.map((row) => (
                    <tr key={row.name} className="border-b border-border/40 last:border-0">
                      <td className="py-2 pr-2 align-middle">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked className="h-3 w-3 rounded border-border" />
                          <span>{row.name}</span>
                        </div>
                      </td>
                      <td className="py-2 pr-2 align-middle text-muted-foreground">{row.progress}</td>
                      <td className="py-2 pr-2 align-middle tabular-nums">{row.quantity.toLocaleString()}</td>
                      <td className="py-2 align-middle text-muted-foreground">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}
