import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

type CopyUrlProps = {
  username: string;
};

function CopyUrl({ username }: CopyUrlProps) {
  const url: string = `http://localhost:5173/public_profile/${username}`;
  const [copied, setCopied] = useState<boolean>(false);

  async function copyUrl() {
    setCopied(true);
    await navigator.clipboard.writeText(url);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

    toast.success("Url Copied");
  }

  return (
    <Field>
      <FieldLabel>Links URL</FieldLabel>
      <FieldContent className="relative">
        <Input value={url} readOnly disabled={true} />
        <Button
          variant="secondary"
          className="absolute right-0"
          onClick={copyUrl}
          type="button"
        >
          {copied ? <Check /> : <Copy />}
        </Button>
      </FieldContent>
    </Field>
  );
}

export default CopyUrl;
