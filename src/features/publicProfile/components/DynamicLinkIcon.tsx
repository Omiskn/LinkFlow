import { LINK_ICONS_MAP } from "../../../lib/icon-links";
import { Link as LinkIcon } from "lucide-react";

type DynamicLinkIconProps = {
  name: string;
  className?: string;
};

export function DynamicLinkIcon({ name, className }: DynamicLinkIconProps) {
  const Icon = LINK_ICONS_MAP[name as keyof typeof LINK_ICONS_MAP] ?? LinkIcon;

  return <Icon className={className} />;
}
