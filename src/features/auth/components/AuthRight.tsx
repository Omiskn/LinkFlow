import { Link } from "react-router-dom";
import Button from "../../../ui/Button";
import Heading from "../../../ui/Heading";

type authRightProps = {
  title: string;
  message: string;
  onClick?: string;
  buttonText: string;
  to: string;
};

export default function AuthRight({
  title,
  message,
  buttonText,
  onClick = "",
  to,
}: authRightProps) {
  return (
    <div
      className="
        hidden md:flex
        bg-(--color-primary-500)
        w-[40%]
        flex-col justify-center gap-3
        items-center px-6 text-center
      "
    >
      <Heading color="--color-primary-0">{title}</Heading>

      <p className="text-(--color-primary-50) mb-4">{message}</p>

      <Link to={`/${to}`}>
        <Button
          size="md"
          variant="secondary"
          className="hover:bg-(--color-primary-50) hover:text-(--color-primary-500) transition"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
}

// welcome back!
// To keep connected with use pleae login with your personal info
