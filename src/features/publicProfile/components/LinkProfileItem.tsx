import { Button } from "@/components/ui/button";
import type { ProfileLinksType } from "./LinkListProfile";
import { DynamicLinkIcon } from "./DynamicLinkIcon";
import { ChevronRight } from "lucide-react";

type LinkProfileItemProps = {
  link: ProfileLinksType;
  onClick: (linkId: number) => void;
};

function LinkProfileItem({ link, onClick }: LinkProfileItemProps) {
  return (
    <Button
      key={link.title}
      variant="outline"
      asChild
      onClick={() => onClick(link.id)}
      className="
                      w-full
                      justify-between
                      rounded-md
                      border-(--color-grey-0)
                      bg-(--color-grey-0)
                      py-6
                      px-2
                      shadow-sm
                      hover:bg-(--color-grey-0)
                      hover:shadow-md
                    "
    >
      <a href={link.url}>
        <div className="flex items-center gap-5">
          <div
            className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-(--color-primary-50)
                          "
          >
            <DynamicLinkIcon
              name={link.icon}
              className="text-(--color-primary-500)"
            />
          </div>

          <span
            className="
                            text-sm
                            font-medium
                            text-(--color-grey-800)

                          "
          >
            {link.title}
          </span>
        </div>

        <ChevronRight
          className="
                          h-6
                          w-6
                          text-(--color-primary-500)
                        "
        />
      </a>
    </Button>
  );
}

export default LinkProfileItem;
