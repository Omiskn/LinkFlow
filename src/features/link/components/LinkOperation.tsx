import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDeleteLink } from "../hooks/useDeleteLink";
import { Spinner } from "@/components/ui/Spinner";
import type { LinkDTO } from "@/types/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddLinkForm from "./AddLinkForm";
import { useEditLink } from "../hooks/useEditLink";

type LinkOperationProps = {
  link: LinkDTO;
  isActive?: boolean;
};

function LinkOperation({ link, isActive }: LinkOperationProps) {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const { editLink, isLoading: isLoading2 } = useEditLink();

  const { deleteLink, isLoading } = useDeleteLink();

  const toggleLink = () => {
    if (!link.link_id) return;

    const data = { is_active: !isActive };
    editLink({ data, editId: link.link_id });
  };
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            <Pencil className="size-4" />
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit link</DialogTitle>
            <DialogDescription>change what you want</DialogDescription>
          </DialogHeader>
          <AddLinkForm setOpen={setOpenEdit} linkToEdit={link} />
        </DialogContent>
      </Dialog>

      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogTrigger asChild>
          <Button variant="destructive" size="sm">
            Delete
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete link</DialogTitle>
            <DialogDescription>Are you sure about that?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => deleteLink(link.link_id as number)}
            >
              {isLoading ? <Spinner /> : <Trash2 className="size-4" />}
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="ml-1 flex items-center gap-2 rounded-lg border px-2 py-1">
        <span className="text-xs text-muted-foreground">
          {isActive ? "Enabled" : "Disabled"}
        </span>
        <Switch
          checked={isActive}
          disabled={isLoading2}
          className={isLoading ? "bg-gray-500" : ""}
          onCheckedChange={toggleLink}
        />
      </div>
    </div>
  );
}

export default LinkOperation;
