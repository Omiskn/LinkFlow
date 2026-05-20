import type { ApiError } from "@/features/auth/hooks/useVerifiyEmail";
import { linkService } from "@/services/apiLink";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";

export function useAddLink() {
  const queryClint = useQueryClient();
  const { mutate: addLink, isPending: isLoading } = useMutation({
    mutationFn: linkService.createLink,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClint.invalidateQueries({ queryKey: ["links"] });
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data?.message || "Something wrong");
    },
  });

  return { addLink, isLoading };
}
