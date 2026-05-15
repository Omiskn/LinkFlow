import { authService } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";

export type ApiError = {
  success: boolean;
  message: string;
};

export function useVerifiyEmail() {
  const queryClient = useQueryClient();

  const {
    mutate: verifyEmail,
    isPending: isloading,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: authService.verifyEmail,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data?.message || "Something wrong");
    },
  });

  return { verifyEmail, isloading, isSuccess, isError };
}
