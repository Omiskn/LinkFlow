import { MdEmail } from "react-icons/md";
import Button from "../../../ui/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormField from "@/ui/FormField";

const loginSchema = z.object({
  email: z.email("Invalid email address"),
});

type LoginFormData = z.infer<typeof loginSchema>;

function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    console.log(data);
  }
  return (
    <form
      className="space-y-6 flex flex-col w-full max-w-sm items-center mt-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField
        icon={MdEmail}
        type="email"
        placeholder="email"
        error={errors.email}
        {...register("email")}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-[70%] md:w-[50%] hover:bg-(--color-primary-600) hover:text-(--color-primary-0) transition"
      >
        Send
      </Button>
    </form>
  );
}

export default ForgotPasswordForm;
