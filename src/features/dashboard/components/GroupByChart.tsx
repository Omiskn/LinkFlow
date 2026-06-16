import {
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  type PieLabelRenderProps,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { ClickPeriodQuery, GroupBy } from "@/types/clicks";
import { useGroupBy } from "../hooks/useGroupBy";
import { useSearchParams } from "react-router-dom";
import { GroupByChartSkeleton } from "./GroupByChartSkeleton";

const pieColors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#1AAE00",
  "#8884D8",
  "#82CA9D",
  "#A4DE6C",
  "#D0ED57",
  "#FFC658",
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FECA57",
  "#FF9FF3",
  "#54A0FF",
  "#5F27CD",
  "#00D2D3",
  "#FF9F43",
  "#EE5253",
  "#10AC84",
  "#341F97",
  "#2E86DE",
  "#E17055",
  "#6C5CE7",
  "#00B894",
  "#E84393",
  "#0984E3",
  "#FDCB6E",
  "#D63031",
  "#00CEC9",
  "#6AB04C",
  "#30336B",
  "#F0932B",
  "#EB4D4B",
  "#22A6B3",
  "#BE2EDD",
  "#4834D4",
  "#7ED6DF",
  "#E056FD",
  "#686DE0",
  "#130F40",
  "#BADC58",
  "#C7ECEE",
  "#FF7979",
  "#BADC58",
  "#7ED6DF",
  "#F9CA24",
  "#F0932B",
];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      // textAnchor={x > ncx ? "middle" : "middle"}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

type GroupByChartProps = {
  title: string;
  description: string;
  groupBy: GroupBy;
};

type GroupedStat = {
  value: string;
  clicks: number;
};

function GroupByChart({ title, description, groupBy }: GroupByChartProps) {
  const [searchParams] = useSearchParams();
  const currentValue =
    searchParams.get("period") || localStorage.getItem("period") || "all";
  const { isLoading, groupedStats } = useGroupBy(
    groupBy,
    currentValue as ClickPeriodQuery,
  );
  const data: GroupedStat[] = groupedStats;

  if (isLoading) return <GroupByChartSkeleton />;

  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <CardTitle>Visitors {title}</CardTitle>

        <CardDescription>Distribution by {description}</CardDescription>
      </CardHeader>

      <CardContent className="h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="clicks"
              nameKey="value"
              //   outerRadius={110}
              //   innerRadius={65}
              paddingAngle={3}
              label={renderCustomizedLabel}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>

            <Legend />

            <Tooltip
              contentStyle={{ backgroundColor: "var(--color-grey-50)" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default GroupByChart;

// import {
//   Pie,
//   PieChart,
//   Sector,
//   type PieLabelRenderProps,
//   type PieSectorShapeProps,
// } from "recharts";

// // #region Sample data
// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

// // #endregion
// const RADIAN = Math.PI / 180;
// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
// }: PieLabelRenderProps) => {
//   if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
//     return null;
//   }
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const ncx = Number(cx);
//   const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
//   const ncy = Number(cy);
//   const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > ncx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${((percent ?? 1) * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// const MyCustomPie = (props: PieSectorShapeProps) => {
//   return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
// };

// export default function LinksCountryChart({
//   isAnimationActive = true,
// }: {
//   isAnimationActive?: boolean;
// }) {
//   return (
//     <PieChart
//       style={{
//         width: "100%",
//         maxWidth: "500px",
//         maxHeight: "80vh",
//         aspectRatio: 1,
//       }}
//       responsive
//     >
//       <Pie
//         data={data}
//         labelLine={false}
//         label={renderCustomizedLabel}
//         fill="#8884d8"
//         dataKey="value"
//         isAnimationActive={isAnimationActive}
//         shape={MyCustomPie}
//       />
//       {/* <RechartsDevtools /> */}
//     </PieChart>
//   );
// }
