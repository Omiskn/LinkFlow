import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AppearanceForm from "@/features/appearance/components/AppearanceForm";

export default function AppearancePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize the look and feel of your dashboard.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AppearanceForm />
      </CardContent>
    </Card>
  );
}
