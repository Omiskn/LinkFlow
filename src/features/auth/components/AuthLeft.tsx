import type { ReactElement } from "react";
import Heading from "../../../ui/Heading";
import SocialLogin from "./Socials";

type authLeftProps = {
  formType: ReactElement;
  title: string;
  showSocial?: boolean;
  message?: string;
};

export default function AuthLeft({
  formType,
  title,
  message,
  showSocial = true,
}: authLeftProps) {
  return (
    <div
      className="
        w-full
        px-6 sm:px-12
        py-8
        flex flex-col gap-2 items-center
      "
    >
      <Heading color="var(--color-primary-300)">{title}</Heading>

      {showSocial && <SocialLogin />}

      {message && (
        <p className="text-(--color-primary-900)/40 mb-4 text-sm text-center">
          {message}
        </p>
      )}

      {formType}
    </div>
  );
}
