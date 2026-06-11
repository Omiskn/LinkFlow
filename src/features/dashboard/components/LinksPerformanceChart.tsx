import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useLinksAnalytics } from "../hooks/useLinkClick";
import type { ClickPeriodQuery, LinksAnalyticsDTO } from "@/types/clicks";
import { useSearchParams } from "react-router-dom";
import { LinksPerformanceSkeleton } from "./LinksPerformanceSkeleton";

function LinksPerformance() {
  const [searchParams] = useSearchParams();
  const currentValue = searchParams.get("period") || "all";

  const { linksAnalytics, isLoading } = useLinksAnalytics(
    currentValue as ClickPeriodQuery,
  );

  console.log(isLoading);
  if (isLoading) return <LinksPerformanceSkeleton />;

  const barData = linksAnalytics.map((link: LinksAnalyticsDTO) => ({
    name: link.title,
    value: link.clicks,
  }));

  return (
    <Card className="border-none shadow-sm xl:col-span-2">
      <CardHeader>
        <CardTitle>Links Performance</CardTitle>

        <CardDescription>Performance of your top links</CardDescription>
      </CardHeader>

      <CardContent className="h-87.5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

            <XAxis dataKey="name" className=" text-xs" />

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
  );
}

export default LinksPerformance;
