import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LinksList from "./LinksList";

function LinksCard() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">Links List</CardTitle>
        <p className="text-sm text-muted-foreground">
          Drag and drop UI is visual only and does not persist.
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        <LinksList />
      </CardContent>
    </Card>
  );
}

export default LinksCard;
