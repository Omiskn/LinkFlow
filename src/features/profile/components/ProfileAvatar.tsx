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
import profileFormSchema from "../profileFormSchema";

type Props = {
  form: UseFormReturn<z.infer<typeof profileFormSchema>>;
};

function ProfileAvatar({ form }: Props) {
  const {
    currentUser: {
      data: {
        user: { profile_image, username },
      },
    },
    isLoading,
  } = useCurrentUser();
  const [imgLoading, setImgLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  const { control } = form;
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <Avatar className="w-45 h-45 mb-12 mt-2 relative">
        {imgLoading && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-(--color-grey-0) rounded-full">
            <Spinner />
          </div>
        )}

        <AvatarImage
          src={profile_image}
          alt={username}
          onLoad={() => setImgLoading(false)}
          onError={() => {
            setImgLoading(false);
            setImgError(true);
          }}
          className={imgLoading ? "opacity-0" : "opacity-100"}
        />

        <AvatarFallback className="uppercase">
          {username.slice(0, 2)}
        </AvatarFallback>

        <AvatarBadge className="min-w-10 min-h-10 bg-(--color-grey-0)">
          <Button
            variant="ghost"
            className="text-(--color-primary-500) w-full h-full rounded-full"
            onClick={() => inputRef.current?.click()}
            disabled={isLoading}
          >
            <Upload />
          </Button>
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
              disabled={isLoading}
            />
            <FieldDescription className="text-center">
              {field.value?.name}
            </FieldDescription>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        variant="outline"
        className=" py-4.5 px-12 mb-2"
        onClick={() => inputRef.current?.click()}
        disabled={isLoading}
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

import { useRef, useState } from "react";

import { Label } from "@/components/ui/label";
// import { formScheme } from "./ProfileForm";
import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { Spinner } from "@/components/ui/Spinner";

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
