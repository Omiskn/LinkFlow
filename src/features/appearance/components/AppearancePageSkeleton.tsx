import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function AppearancePageSkeleton() {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <Skeleton className="h-7 w-40" />
        <Skeleton className="h-4 w-72" />
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <SettingRowSkeleton type="colors" />
          <Separator />

          <SettingRowSkeleton type="buttons" />
          <Separator />

          <SettingRowSkeleton type="fonts" />
          <Separator />

          <SettingRowSkeleton type="language" />
          <Separator />

          <SettingRowSkeleton type="mode" />
        </div>
      </CardContent>
    </Card>
  );
}

type SettingRowSkeletonProps = {
  type: "colors" | "buttons" | "fonts" | "language" | "mode";
};

function SettingRowSkeleton({ type }: SettingRowSkeletonProps) {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-12.5 w-12.5 rounded-lg" />

        <div className="space-y-2 flex-1">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-64" />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 lg:justify-self-center flex-wrap">
        {type === "colors" &&
          Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-10 rounded-full" />
          ))}

        {(type === "buttons" || type === "language" || type === "mode") &&
          Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={i} className="h-14 w-36 rounded-xl" />
          ))}

        {type === "fonts" &&
          Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-14 w-32 rounded-none" />
          ))}
      </div>
    </div>
  );
}
