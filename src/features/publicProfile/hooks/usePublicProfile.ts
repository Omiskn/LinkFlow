import { authService } from "@/services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function usePublicProfile(username: string) {
  const { data: publicProfileUser, isLoading } = useQuery({
    queryKey: ["publicProfile"],
    queryFn: () => authService.getPublicProfile(username),
  });

  return { userProfile: publicProfileUser?.data?.user, isLoading };
}
