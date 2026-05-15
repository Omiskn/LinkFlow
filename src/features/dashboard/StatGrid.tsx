import { Activity, Eye, LinkIcon, MousePointerClick } from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Links"
        value={10}
        icon={LinkIcon}
        bgColor="bg-primary-100"
      />

      <StatCard
        title="Total Clicks"
        value={20}
        icon={MousePointerClick}
        bgColor="bg-primary-200"
      />

      <StatCard
        title="Active Links"
        value={10}
        icon={Activity}
        bgColor="bg-primary-300"
      />

      <StatCard
        title="Visitors"
        value={12}
        icon={Eye}
        bgColor="bg-primary-50"
      />
    </div>
  );
}
