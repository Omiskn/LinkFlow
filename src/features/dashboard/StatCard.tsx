import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatCardProps = {
  title: string;
  value: number;
  icon: React.ElementType;
  bgColor?: string;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  bgColor = "bg-white",
}: StatCardProps) {
  return (
    <Card
      className={`
        border-none
        shadow-md
        transition-all
        hover:scale-[1.02]
        hover:shadow-lg
        ${bgColor}
      `}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-text">{title}</CardTitle>

        <Icon className="w-5 h-5 text-primary-700" />
      </CardHeader>

      <CardContent>
        <div className="text-3xl font-bold text-text">{value}</div>
      </CardContent>
    </Card>
  );
}
