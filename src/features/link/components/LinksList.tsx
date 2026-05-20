import { useLinks } from "../hooks/useLink";
import Empty from "@/components/ui/Empty";
import LinkListSeleton from "./LinkListSeleton";
import LinkItem from "./LinkItem";
import type { LinkDTO } from "@/types/link";

function LinksList() {
  const { links, isLoading } = useLinks();

  if (isLoading) return <LinkListSeleton />;

  if (links.length === 0) return <Empty message="no data yes" />;

  return links.map((link: LinkDTO) => (
    <LinkItem link={link} key={link.link_id} />
  ));
}

export default LinksList;
