import type { ApiError } from "@/features/auth/hooks/useVerifiyEmail";
import { linkService } from "@/services/apiLink";
import type { EditLinkParams } from "@/types/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";

export function useEditLink() {
  const queryClient = useQueryClient();
  const { mutate: editLink, isPending: isLoading } = useMutation({
    mutationFn: ({ data, editId }: EditLinkParams) =>
      linkService.editLink(data, editId),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["links"] });
    },
    onError: (error: AxiosError<ApiError>) => {
      toast.error(error.response?.data?.message || "something went wrong");
    },
  });

  return { editLink, isLoading };
}
