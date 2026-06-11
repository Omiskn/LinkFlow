import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function LinksPerformanceSkeleton() {
  return (
    <Card className="border-none shadow-sm xl:col-span-2">
      <CardHeader>
        <Skeleton className="h-6 w-44" />
        <Skeleton className="h-4 w-64" />
      </CardHeader>

      <CardContent className="h-87.5">
        <div className="flex h-full items-end justify-around gap-4">
          <Skeleton className="h-20 w-30 rounded-t-lg" />
          <Skeleton className="h-32 w-30 rounded-t-lg" />
          <Skeleton className="h-52 w-30 rounded-t-lg" />
          <Skeleton className="h-28 w-30 rounded-t-lg" />
          <Skeleton className="h-40 w-30 rounded-t-lg" />
          <Skeleton className="h-64 w-30 rounded-t-lg" />
        </div>
      </CardContent>
    </Card>
  );
}
