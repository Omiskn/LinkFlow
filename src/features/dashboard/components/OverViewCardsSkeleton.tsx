import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function OverViewCardsSkeleton() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="border-none shadow-xs">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-3">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-20" />
            </div>

            <Skeleton className="h-12 w-12 rounded-2xl" />
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
