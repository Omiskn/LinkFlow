import { Button } from "@/components/ui/button";
import LinksCard from "@/features/link/components/LinksCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddLinkForm, {
  VanillaReorderList,
} from "@/features/link/components/AddLinkForm";
import { useState } from "react";

export default function LinkPage() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="space-y-4 flex flex-col">
      <LinksCard />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="self-start py-2 px-4" size="lg">
            add link
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>add link</DialogTitle>
            <DialogDescription>Add a new link</DialogDescription>
          </DialogHeader>
          <AddLinkForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>

      <VanillaReorderList />

      {/* </section> */}
    </div>
  );
}
