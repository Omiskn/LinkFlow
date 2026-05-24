import { settingService } from "@/services/apiAppearance";
import { useQuery } from "@tanstack/react-query";

export function useSetting() {
  const { data, isPending: isLoading } = useQuery({
    queryKey: ["setting"],
    queryFn: settingService.getSettings,
  });

  return { setting: data?.data, isLoading };
}
