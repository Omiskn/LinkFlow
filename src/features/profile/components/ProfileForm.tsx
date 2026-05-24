import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Controller, type UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { useUpdateUser } from "../hooks/useUpdateUser";
import profileFormSchema from "../profileFormSchema";

type Props = {
  form: UseFormReturn<z.infer<typeof profileFormSchema>>;
};

function ProfileForm({ form }: Props) {
  const { updateMe, isLoading: isUpdatingUser } = useUpdateUser();
  const isLoading = isUpdatingUser;

  const { handleSubmit, control } = form;

  function onSubmit(data: z.infer<typeof profileFormSchema>) {
    updateMe(data);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="profile-form">
      <FieldGroup className=" space-y-4">
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-username">Username</FieldLabel>
              <div className="flex items-center ">
                {/* <span className="py-2 px-3 border border-r-0 rounded-l-lg bg-(--color-primary-50) text-(--color-primary-600) text-lg font-bold">
                          @
                        </span> */}
                <Input
                  {...field}
                  id="form-username"
                  placeholder="your username"
                  autoComplete="off"
                  aria-invalid={fieldState.invalid}
                  className="p-5"
                  disabled={isLoading}
                  // rounded-l-none border-l-0
                />
              </div>
              <FieldDescription>This is your unique username.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="display_name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-display-name">Display Name</FieldLabel>
              <Input
                {...field}
                id="form-display-name"
                placeholder="Your Name"
                autoComplete="off"
                aria-invalid={fieldState.invalid}
                className="p-5"
                disabled={isLoading}
              />
              <FieldDescription>
                This is the name that will be displayed on your profile.
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="bio"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-bio">Bio</FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  {...field}
                  id="form-bio"
                  placeholder="Building simple things that matters."
                  rows={6}
                  className="min-h-24 resize-none"
                  aria-invalid={fieldState.invalid}
                  disabled={isLoading}
                />
                <InputGroupAddon align="block-end" className="justify-end">
                  <InputGroupText className="tabular-nums text-xs ">
                    {field.value.length}/200 characters
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
}

export default ProfileForm;
