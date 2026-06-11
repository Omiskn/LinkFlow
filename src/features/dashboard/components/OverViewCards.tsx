import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Activity, /*Eye ,*/ LinkIcon, MousePointerClick } from "lucide-react";
import { useStats } from "../hooks/useStats";
import { useLinks } from "@/features/link/hooks/useLink";
import OverViewCardsSkeleton from "./OverViewCardsSkeleton";
import type { LinkDTO } from "@/types/link";

function OverViewCards() {
  const stats = [
    {
      title: "Total Links",
      value: 0,
      icon: LinkIcon,
      color: "bg-primary-100",
    },
    {
      title: "Total Clicks",
      value: 0,
      icon: MousePointerClick,
      color: "bg-primary-200",
    },
    {
      title: "Active Links",
      value: 0,
      icon: Activity,
      color: "bg-primary-300",
    },
  ];
  const { stats: clickStats, isLoading: isLoading1 } = useStats();
  const { links, isLoading: isLoading2 } = useLinks();

  const isLoading = isLoading1 || isLoading2;

  if (isLoading) return <OverViewCardsSkeleton />;

  const activeLinks = links.filter((link: LinkDTO) => link.is_active).length;
  stats[0].value = links.length;
  stats[1].value = clickStats?.allTime;
  stats[2].value = activeLinks;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className={`${item.color} border-none shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardDescription>{item.title}</CardDescription>

                <CardTitle className="mt-2 text-3xl">{item.value}</CardTitle>
              </div>

              <div className="rounded-2xl bg-background/70 p-3">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}

export default OverViewCards;
