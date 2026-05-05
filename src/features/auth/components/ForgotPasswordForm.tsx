import { MdEmail } from "react-icons/md";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";

function ForgotPasswordForm() {
  return (
    <form className="space-y-6 flex flex-col w-full max-w-sm items-center mt-3">
      <Input icon={MdEmail} placeholder="Email" type="text" />

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
