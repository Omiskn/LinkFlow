import { linkService } from "@/services/apiLink";
import { useQuery } from "@tanstack/react-query";

export function useLinks() {
  const { data: links, isLoading } = useQuery({
    queryKey: ["links"],
    queryFn: linkService.getLinks,
  });

  return { links: links?.data, isLoading };
}
