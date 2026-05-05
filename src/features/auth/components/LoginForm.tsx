import { FaLock } from "react-icons/fa";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form className="space-y-4 flex flex-col w-full max-w-sm items-center">
      <Input icon={MdEmail} placeholder="Email" type="text" />
      <Input icon={FaLock} type="password" placeholder="Password" />

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
        className="w-full sm:w-[70%] md:w-[50%] hover:scale-[1.02] transition"
      >
        Login
      </Button>
    </form>
  );
}
