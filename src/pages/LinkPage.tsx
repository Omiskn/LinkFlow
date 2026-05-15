import { useState } from "react";
import { GripVertical, Pencil, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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

const formScheme = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(15, "Title must be less than 15 characters"),

  url: z
    .url("Please enter a valid URL")
    .min(1, "URL is required")
    .max(150, "URL is too long"),

  icon: z
    .string()
    .min(3, "Icon must be at least 3 characters")
    .max(15, "Icon must be less than 15 characters"),

  link_type: z.string().min(1, "Please select a link type"),
});

const initialLinks = [
  { id: 1, title: "Portfolio", slug: "portfolio", clicks: 623, enabled: true },
  { id: 2, title: "GitHub", slug: "github", clicks: 421, enabled: true },
  { id: 3, title: "YouTube", slug: "youtube", clicks: 288, enabled: false },
  {
    id: 4,
    title: "Newsletter",
    slug: "newsletter",
    clicks: 197,
    enabled: true,
  },
];

export default function LinkPage() {
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      title: "",
      url: "",
      icon: "",
      link_type: "",
    },
  });

  function onSubmit(data: z.infer<typeof formScheme>) {
    console.log(data);
  }

  const [links, setLinks] = useState(initialLinks);
  const [activeEditId, setActiveEditId] = useState<number | null>(2);

  const toggleLink = (id: number, checked: boolean) => {
    setLinks((prev) =>
      prev.map((link) =>
        link.id === id ? { ...link, enabled: checked } : link,
      ),
    );
  };

  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-2">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Add Link</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
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
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="icon"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="link-form-icon">Icon</FieldLabel>
                      <Input
                        {...field}
                        id="link-form-icon"
                        placeholder="Enter the name of the website or social like: facebook, whatsapp, instegram"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
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
                      >
                        <SelectTrigger
                          id="form-rhf-complex-billingPeriod"
                          aria-invalid={fieldState.invalid}
                        >
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="social">social</SelectItem>
                          <SelectItem value="video">video</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Field orientation="horizontal">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                  >
                    Reset
                  </Button>
                  <Button
                    type="submit"
                    form="link-form"
                    className="w-full sm:w-auto"
                  >
                    <Plus className="size-4" />
                    Add link
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Edit Link (Mock UI)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Selected link</label>
              <Input value="GitHub" readOnly />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Short slug</label>
              <Input value="github" readOnly />
            </div>
            <Button variant="outline" className="w-full sm:w-auto">
              <Pencil className="size-4" />
              Save edits
            </Button>
          </CardContent>
        </Card>
      </section>

      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Links List</CardTitle>
          <p className="text-sm text-muted-foreground">
            Drag and drop UI is visual only and does not persist.
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {links.map((link) => (
            <div
              key={link.id}
              className="flex flex-col gap-3 rounded-xl border bg-background p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="rounded-lg border p-2 text-muted-foreground hover:bg-muted"
                  aria-label="Drag handle visual"
                >
                  <GripVertical className="size-4" />
                </button>
                <div>
                  <p className="font-medium">{link.title}</p>
                  <p className="text-sm text-muted-foreground">
                    linkhup.app/{link.slug} - {link.clicks} clicks
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveEditId(link.id)}
                >
                  <Pencil className="size-4" />
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="size-4" />
                  Delete
                </Button>
                <div className="ml-1 flex items-center gap-2 rounded-lg border px-2 py-1">
                  <span className="text-xs text-muted-foreground">
                    {link.enabled ? "Enabled" : "Disabled"}
                  </span>
                  <Switch
                    checked={link.enabled}
                    onCheckedChange={(checked) => toggleLink(link.id, checked)}
                  />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {activeEditId ? (
        <p className="text-sm text-muted-foreground">
          Editing link ID: {activeEditId} (mock state only).
        </p>
      ) : null}
    </div>
  );
}
