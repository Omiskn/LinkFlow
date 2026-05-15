import { authService } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import type { ApiError } from "./useVerifiyEmail";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isPending: isloading } = useMutation({
    mutationFn: authService.login,
    // mutationKey: ["user"],
    onSuccess: (data) => {
      toast.success("welcom back");
      localStorage.setItem("token", data.data.token);
      queryClient.setQueryData(["user"], data.data.user);
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data.message || "Something wrong");
    },
  });

  return { login, isloading };
}
