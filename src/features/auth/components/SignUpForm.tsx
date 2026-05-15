import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaLock, FaUser } from "react-icons/fa";
import Button from "../../../ui/Button";
import { MdEmail } from "react-icons/md";
import FormField from "../../../ui/FormField";
import { useRegister } from "../hooks/useRegister";
import { Spinner } from "@/components/ui/Spinner";

// 1. Create schema
const loginSchema = z
  .object({
    username: z.string().min(1, "this field is required"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// 2. Infer TypeScript type from schema
type LoginFormData = z.infer<typeof loginSchema>;

export default function SignUpForm() {
  // 3. Initialize form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { register: registerApi, isloading } = useRegister();
  console.log(isloading);

  // 4. Submit handler
  function onSubmit(data: LoginFormData) {
    const { username, email, password } = data;
    registerApi(
      { username, email, password },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
    console.log({ username, email, password });
  }

  return (
    <form
      className="space-y-4 flex flex-col w-full max-w-sm items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormField
        icon={FaUser}
        placeholder="Username"
        type="text"
        error={errors.username}
        disabled={isloading}
        {...register("username")}
      />

      <FormField
        icon={MdEmail}
        placeholder="Email"
        type="text"
        error={errors.email}
        disabled={isloading}
        {...register("email")}
      />

      <FormField
        icon={FaLock}
        placeholder="Password"
        type="password"
        error={errors.password}
        disabled={isloading}
        {...register("password")}
      />

      <FormField
        icon={FaLock}
        placeholder="Confirm Password"
        type="password"
        error={errors.confirmPassword}
        disabled={isloading}
        {...register("confirmPassword")}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-[70%] md:w-[50%] hover:bg-(--color-primary-600) hover:text-(--color-primary-0) transition mt-4 flex items-center justify-center"
        disabled={isloading}
      >
        {isloading ? <Spinner /> : "Sign up"}
      </Button>
    </form>
  );
}
