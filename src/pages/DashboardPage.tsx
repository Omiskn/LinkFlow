import OverViewCards from "@/features/dashboard/components/OverViewCards";
import LinksPerformance from "@/features/dashboard/components/LinksPerformanceChart";
import GroupByChart from "@/features/dashboard/components/GroupByChart";
import Filter from "@/features/dashboard/components/Filter";

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

        <div className="flex gap-2 items-center">
          <div className="rounded-xl bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-[260px]">
            Welcome back 👋
          </div>
          <Filter
            queryKey="period"
            placeholder="Filter by period"
            defaultValue="all"
            options={[
              { value: "all", label: "All Time" },
              { value: "today", label: "Today" },
              { value: "week", label: "Last Week" },
              { value: "month", label: "Last Month" },
            ]}
          />
        </div>
      </div>

      <OverViewCards />

      <div className="grid gap-6 xl:grid-cols-3">
        <LinksPerformance />

        <GroupByChart
          title="countries"
          description="country"
          groupBy="country"
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <GroupByChart
          title="browsers"
          description="browser"
          groupBy="browser"
        />
        <GroupByChart
          title="device types"
          description="device types"
          groupBy="device_type"
        />
      </div>
    </div>
  );
}
