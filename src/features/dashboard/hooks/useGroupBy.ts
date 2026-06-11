import { clickService } from "@/services/apiClick";
import type { ClickPeriodQuery, GroupBy } from "@/types/clicks";
import { useQuery } from "@tanstack/react-query";

export function useGroupBy(groupBy: GroupBy, period: ClickPeriodQuery = "all") {
  const { isPending: isLoading, data } = useQuery({
    queryKey: ["grouped-analytics", groupBy, period],
    queryFn: () => clickService.getGroupAnalytics(groupBy, period),
  });

  return {
    groupedStats: data?.data,
    isLoading,
  };
}
