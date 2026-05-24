// src/pages/Dashboard.tsx

import { Activity, Eye, LinkIcon, MousePointerClick } from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// ======================
// MOCK DATA
// ======================

const stats = [
  {
    title: "Total Links",
    value: 24,
    icon: LinkIcon,
    color: "bg-primary-100",
  },
  {
    title: "Total Clicks",
    value: 1240,
    icon: MousePointerClick,
    color: "bg-primary-200",
  },
  {
    title: "Active Links",
    value: 18,
    icon: Activity,
    color: "bg-primary-300",
  },
  {
    title: "Visitors",
    value: 340,
    icon: Eye,
    color: "bg-primary-50",
  },
];

const lineData = [
  { name: "Mon", clicks: 120 },
  { name: "Tue", clicks: 210 },
  { name: "Wed", clicks: 180 },
  { name: "Thu", clicks: 260 },
  { name: "Fri", clicks: 320 },
  { name: "Sat", clicks: 280 },
  { name: "Sun", clicks: 390 },
];

const barData = [
  { name: "Portfolio", value: 400 },
  { name: "Github", value: 300 },
  { name: "Portfolio", value: 400 },
  { name: "Instagram", value: 250 },
  { name: "Github", value: 300 },
  { name: "Portfolio", value: 400 },
  { name: "Instagram", value: 250 },
  { name: "YouTube", value: 500 },
  { name: "Portfolio", value: 400 },
  { name: "Instagram", value: 250 },
  { name: "Github", value: 300 },
  { name: "Github", value: 300 },
  { name: "Instagram", value: 250 },
  { name: "YouTube", value: 500 },
];

const pieData = [
  { name: "USA", value: 40 },
  { name: "Germany", value: 20 },
  { name: "Yemen", value: 15 },
  { name: "Japan", value: 25 },
];

const pieColors = [
  "var(--color-primary-300)",
  "var(--color-primary-400)",
  "var(--color-primary-500)",
  "var(--color-primary-700)",
];

// ======================
// COMPONENT
// ======================

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Overview of your links and analytics.
          </p>
        </div>

        <div className="rounded-xl bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Welcome back 👋
        </div>
      </div>

      {/* ======================
          OVERVIEW CARDS
      ====================== */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className={`${item.color} border-none shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardDescription>{item.title}</CardDescription>

                  <CardTitle className="mt-2 text-3xl">{item.value}</CardTitle>
                </div>

                <div className="rounded-2xl bg-background/70 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* ======================
          CHARTS
      ====================== */}

      <div className="grid gap-6 xl:grid-cols-3">
        {/* ======================
            LINE CHART
        ====================== */}

        <Card className="border-none shadow-sm xl:col-span-2">
          <CardHeader>
            <CardTitle>Clicks Over Time</CardTitle>

            <CardDescription>Weekly clicks analytics</CardDescription>
          </CardHeader>

          <CardContent className="h-87.5">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="4 4" opacity={0.2} />

                <XAxis dataKey="name" />

                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-grey-50)" }}
                />

                <Line
                  type="monotone"
                  dataKey="clicks"
                  stroke="var(--color-primary-500)"
                  strokeWidth={4}
                  dot={{
                    r: 5,
                    fill: "var(--color-primary-700)",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* ======================
            PIE CHART
        ====================== */}

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Visitors Countries</CardTitle>

            <CardDescription>Distribution by country</CardDescription>
          </CardHeader>

          <CardContent className="h-87.5">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={110}
                  innerRadius={65}
                  paddingAngle={5}
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{ backgroundColor: "var(--color-grey-50)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* ======================
          BAR CHART
      ====================== */}

      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Links Performance</CardTitle>

          <CardDescription>Performance of your top links</CardDescription>
        </CardHeader>

        <CardContent className="h-87.5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

              <XAxis dataKey="name" />

              <Tooltip
                contentStyle={{ backgroundColor: "var(--color-grey-50)" }}
              />

              <Bar
                dataKey="value"
                radius={[12, 12, 0, 0]}
                fill="var(--color-primary-500)"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
