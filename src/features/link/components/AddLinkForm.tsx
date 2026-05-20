import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAddLink } from "../hooks/useAddLink";
import { Spinner } from "@/components/ui/Spinner";
import type React from "react";
import type { LinkDTO } from "@/types/link";
import { useEditLink } from "../hooks/useEditLink";

const LINK_TYPES = [
  "social",
  "website",
  "video",
  "music",
  "store",
  "portfolio",
  "other",
] as const;

const LINK_Icons = [
  "facebook",
  "instagram",
  "x",
  "youtube",
  "github",
  "linkedin",
  "tiktok",
  "discord",
  "telegram",
  "whatsapp",
  "spotify",
  "paypal",
  "website",
  "email",
  "phone",
  "custom",
] as const;

const formScheme = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(15, "Title must be less than 15 characters"),

  url: z
    .url("Please enter a valid URL")
    .min(1, "URL is required")
    .max(150, "URL is too long"),

  icon: z.string().min(1, "Please select a link icon"),

  link_type: z.string().min(1, "Please select a link type"),
});

type AddLinkFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  linkToEdit?: LinkDTO;
};

function AddLinkForm({ setOpen, linkToEdit }: AddLinkFormProps) {
  const isEditSesstion = Boolean(linkToEdit);
  const editId = linkToEdit?.link_id;

  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      title: linkToEdit?.title ?? "",
      url: linkToEdit?.url ?? "",
      icon: linkToEdit?.icon ?? "",
      link_type: linkToEdit?.link_type ?? "",
    },
  });
  const { addLink, isLoading: isCreating } = useAddLink();
  const { editLink, isLoading: isEditing } = useEditLink();

  const isWorking = isCreating || isEditing;

  function onSubmit(data: z.infer<typeof formScheme>) {
    console.log(data);
    if (isEditSesstion && editId)
      editLink({ data, editId }, { onSuccess: () => setOpen(false) });
    else addLink(data, { onSuccess: () => setOpen(false) });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} id="link-form">
      <FieldGroup>
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="link-form-title">Title</FieldLabel>
              <Input
                {...field}
                id="link-form-title"
                aria-invalid={fieldState.invalid}
                placeholder="Your url title like my facebook"
                autoComplete="off"
                disabled={isWorking}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="url"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="link-form-url">Url</FieldLabel>
              <Input
                {...field}
                id="link-form-url"
                placeholder="https://facebook.com"
                autoComplete="off"
                aria-invalid={fieldState.invalid}
                disabled={isWorking}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="icon"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-complex-billingPeriod">
                Icon
              </FieldLabel>
              <Select
                name={field.name}
                value={field.value}
                onValueChange={field.onChange}
                disabled={isWorking}
              >
                <SelectTrigger
                  id="form-rhf-complex-billingPeriod"
                  aria-invalid={fieldState.invalid}
                >
                  <SelectValue placeholder="Icon" />
                </SelectTrigger>
                <SelectContent>
                  {LINK_Icons.map((icon: string) => (
                    <SelectItem value={icon} key={icon}>
                      {icon}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="link_type"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-complex-billingPeriod">
                Link type
              </FieldLabel>
              <Select
                name={field.name}
                value={field.value}
                onValueChange={field.onChange}
                disabled={isWorking}
              >
                <SelectTrigger
                  id="form-rhf-complex-billingPeriod"
                  aria-invalid={fieldState.invalid}
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {LINK_TYPES.map((type: string) => (
                    <SelectItem value={type} key={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Field orientation="horizontal" className="justify-end">
          <Button
            type="button"
            variant="outline"
            disabled={isWorking}
            onClick={() => form.reset()}
          >
            Reset
          </Button>
          <Button
            type="submit"
            form="link-form"
            className="w-full sm:w-auto"
            disabled={isWorking}
          >
            <Plus className="size-4" />
            {isWorking ? (
              <Spinner />
            ) : isEditSesstion ? (
              "edit link"
            ) : (
              "Add link"
            )}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

export default AddLinkForm;

import { useState, useRef } from "react";

export function VanillaReorderList() {
  const [items, setItems] = useState<string[]>(["Item A", "Item B", "Item C"]);

  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleSort = () => {
    if (dragItem.current === null || dragOverItem.current === null) return;

    const _items = [...items];
    const draggedItemContent = _items.splice(dragItem.current, 1)[0];
    _items.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;
    setItems(_items);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={() => (dragItem.current = index)}
          onDragEnter={() => (dragOverItem.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
          style={{ padding: "10px", border: "1px solid #ddd", cursor: "move" }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
