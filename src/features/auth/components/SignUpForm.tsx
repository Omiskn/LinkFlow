import { FaLock, FaUser } from "react-icons/fa";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { MdEmail } from "react-icons/md";

export default function SignUpForm() {
  return (
    <form className="space-y-4 flex flex-col w-full max-w-sm items-center">
      <Input icon={FaUser} placeholder="Username" type="text" />
      <Input icon={MdEmail} placeholder="Email" type="text" />
      <Input icon={FaLock} type="password" placeholder="Password" />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-[70%] md:w-[50%] hover:bg-(--color-primary-600) hover:text-(--color-primary-0) transition"
      >
        Sign up
      </Button>
    </form>
  );
}
