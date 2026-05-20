// import { Badge } from "@/components/ui/badge";
import type { LinkDTO } from "@/types/link";
import LinkOperation from "./LinkOperation";
import { GripVertical } from "lucide-react";

type LinkItemProps = {
  link: LinkDTO;
};

function LinkItem({ link }: LinkItemProps) {
  return (
    <div
      key={link.link_id}
      className="flex flex-col gap-3 rounded-xl border bg-background p-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-lg border p-2 text-muted-foreground hover:bg-muted"
          aria-label="Drag handle visual"
        >
          <GripVertical className="size-4" />
        </button>
        <div>
          <p className="font-medium">{link.title}</p>
          <p className="text-sm text-muted-foreground">
            {link.url}
            {/* <Badge className="ml-2 mr-2 bg-(--color-primary-500)">
              {link.link_type}
            </Badge> */}
            {/* <Badge className="ml-2 mr-2 bg-(--color-primary-500)">
              {link.click_count} clicks
            </Badge> */}
          </p>
        </div>
      </div>

      <LinkOperation link={link} isActive={link.is_active} />
    </div>
  );
}

export default LinkItem;
