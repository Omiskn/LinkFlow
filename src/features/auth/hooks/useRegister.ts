import { authService } from "@/services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import type { ApiError } from "./useVerifiyEmail";
import type { RegisterDTO } from "@/types/user";

export function useRegister() {
  const queryClient = useQueryClient();
  const { mutate: register, isPending: isloading } = useMutation({
    mutationFn: (data: RegisterDTO) => authService.register(data),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success(data?.data?.message);
    },

    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data?.message || "Something wrong");
    },
  });

  return { register, isloading };
}
