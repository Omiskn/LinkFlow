import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type SettingRowProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  children: React.ReactNode;
};

function SettingRow({
  icon: Icon,
  title,
  description,
  children,
}: SettingRowProps) {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-6">
      {/* Left */}
      <div className="flex gap-2 items-center">
        <Icon className="bg-(--color-primary-50) text-(--color-primary-500) w-12.5 h-12.5 rounded-lg p-2.5" />
        <CardHeader className="grow">
          <CardTitle className="capitalize">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </div>
      {/* Right */}

      <div className="flex items-center lg:justify-self-center">{children}</div>
    </div>
  );
}

export default SettingRow;
