import { clickService } from "@/services/apiClick";
import type { ClickPeriodQuery } from "@/types/clicks";
import { useQuery } from "@tanstack/react-query";

export function useLinksAnalytics(period: ClickPeriodQuery = "all") {
  const { isPending: isLoading, data } = useQuery({
    queryFn: () => clickService.getLinksAnalytics(period),
    queryKey: ["linksClicks", period],
  });

  return { linksAnalytics: data?.data, isLoading };
}
