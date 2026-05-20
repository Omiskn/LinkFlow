import type { ApiError } from "@/features/auth/hooks/useVerifiyEmail";
import { linkService } from "@/services/apiLink";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";

export function useDeleteLink() {
  const queryClient = useQueryClient();
  const { mutate: deleteLink, isPending: isLoading } = useMutation({
    mutationFn: linkService.deleteLink,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.request?.data?.message);
    },
  });

  return { deleteLink, isLoading };
}
