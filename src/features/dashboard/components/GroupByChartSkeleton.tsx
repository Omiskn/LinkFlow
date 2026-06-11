import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function GroupByChartSkeleton() {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-56" />
      </CardHeader>

      <CardContent className="flex items-center justify-center h-87.5">
        <Skeleton className="h-64 w-64 rounded-full" />
      </CardContent>
    </Card>
  );
}
