import { clickService } from "@/services/apiClick";
import { useQuery } from "@tanstack/react-query";

export function useStats() {
  const { isPending: isLoading, data } = useQuery({
    queryFn: clickService.getStats,
    queryKey: ["stats"],
  });

  return { stats: data?.data, isLoading };
}
