import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Controller, useForm, type UseFormReturn } from "react-hook-form";
import * as z from "zod";
import profileFormSchema from "../profileFormScheme";

type Props = {
  form: UseFormReturn<z.infer<typeof profileFormSchema>>;
};

function ProfileAvatar({ form }: Props) {
  const {
    currentUser: { profile_image },
    isLoading: isLoadingUser,
  } = useCurrentUser();

  const { control } = form;
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Avatar className="w-45 h-45 mb-12 mt-2">
        <AvatarImage src={profile_image} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge className="bg-(--color-grey-0) min-w-10 min-h-10 dark:bg-green-800">
          <Upload className="text-(--color-primary-500) min-w-5 min-h-5" />
        </AvatarBadge>
      </Avatar>
      <Controller
        name="profileImage"
        control={control}
        render={({ field, fieldState }) => (
          <Field>
            <Input
              type="file"
              name={field.name}
              accept="image/*"
              className="hidden"
              onBlur={field.onBlur}
              ref={(e) => {
                field.ref(e);
                inputRef.current = e;
              }}
              onChange={(e) => {
                const file = e.target.files?.[0];

                field.onChange(file);
              }}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        variant="outline"
        className=" py-4.5 px-12 mb-2"
        onClick={() => inputRef.current?.click()}
      >
        <Upload className="text-(--color-primary-500) hover:text-red-500" />
        <span className="text-(--color-primary-500)">Upload Image</span>
      </Button>
      <p className="text-xs text-(--color-grey-700) font-semibold">
        JPG, PNG OR WEVP. Max size 2MB
      </p>
    </>
  );
}

export default ProfileAvatar;

import { useRef } from "react";

import { Label } from "@/components/ui/label";
// import { formScheme } from "./ProfileForm";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

type FormValues = {
  image: File | null;
};

export function Profile() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { handleSubmit, setValue, watch } = useForm<FormValues>();

  const image = watch("image");

  function onSubmit(values: FormValues) {
    console.log(values.image);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label>Profile Image</Label>

        {/* hidden input */}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;

            setValue("image", file);
          }}
        />

        {/* custom button */}
        <Button
          type="button"
          variant="outline"
          onClick={() => inputRef.current?.click()}
        >
          {image ? "Change Image" : "Upload Image"}
        </Button>

        {/* file name */}
        {image && <p className="text-sm text-muted-foreground">{image.name}</p>}
      </div>

      <Button type="submit">Save</Button>
    </form>
  );
}
