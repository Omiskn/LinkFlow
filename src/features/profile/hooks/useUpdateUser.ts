import type { ApiError } from "@/features/auth/hooks/useVerifiyEmail";
import { authService } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateMe, isPending: isLoading } = useMutation({
    mutationFn: authService.updateMe,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data.message || "somthing went wrong");
    },
  });

  return { updateMe, isLoading };
}
