import { clickService } from "@/services/apiClick";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useRecordClick() {
  const queryClint = useQueryClient();
  const { mutate: recordClick, isPending: isLoading } = useMutation({
    mutationFn: clickService.create,
    onSuccess: () => {
      queryClint.invalidateQueries({
        queryKey: ["linksClicks", "grouped-analytics"],
      });
    },
  });

  return { recordClick, isLoading };
}
