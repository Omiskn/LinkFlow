import { Inbox } from "lucide-react";
import { Card, CardContent } from "./card";

type EmptyProps = {
  message: string;
};

function Empty({ message }: EmptyProps) {
  return (
    <Card>
      <CardContent className="flex flex-col py-10 text-center items-center justify-center">
        <Inbox className="w-10 h-10 font-bold text-muted-foreground mb-3" />
        <h3 className="text-lg font-semibold">{message}</h3>
        <p className="text-sm text-muted-foreground">
          There is nothing to show right now. Add your first item to get
          started.
        </p>
      </CardContent>
    </Card>
  );
}

export default Empty;
