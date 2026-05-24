import type { ApiError } from "@/features/auth/hooks/useVerifiyEmail";
import { settingService } from "@/services/apiAppearance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isPending: isLoading } = useMutation({
    mutationFn: settingService.updateSettings,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["setting"] });
    },

    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data.message || "someting went wrong");
    },
  });

  return { updateSetting, isLoading };
}
