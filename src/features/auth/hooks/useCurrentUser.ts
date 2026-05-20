import { authService } from "@/services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useCurrentUser() {
  const {
    data = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: authService.getMe,
  });

  return { currentUser: data.data?.user, isLoading, error };
}
