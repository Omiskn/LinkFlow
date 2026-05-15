import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../../ui/FormField";
import Button from "../../../ui/Button";
import { useLogin } from "../hooks/useLogin";
import { Spinner } from "@/components/ui/Spinner";

// schema
const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const navigate = useNavigate();
  const { login, isloading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    login(data, {
      onSuccess: () => {
        navigate("/", { replace: true });
      },
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 flex flex-col w-full max-w-sm items-center"
    >
      <FormField
        icon={MdEmail}
        placeholder="Email"
        type="text"
        error={errors.email}
        {...register("email")}
        disabled={isloading}
      />

      <FormField
        icon={FaLock}
        type="password"
        placeholder="Password"
        error={errors.password}
        {...register("password")}
        disabled={isloading}
      />

      <Link
        to="/forgot_password"
        className="underline hover:text-(--color-primary-900)/70 mb-6"
      >
        Forgot your password?
      </Link>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-[70%] md:w-[50%] hover:scale-[1.02] transition flex items-center justify-center"
        disabled={isloading}
      >
        {isloading ? <Spinner /> : "Login"}
      </Button>
    </form>
  );
}
