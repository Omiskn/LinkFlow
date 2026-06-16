import { Spinner } from "./ui/Spinner";

function FullPageSpinner() {
  return (
    <div className="h-screen bg-(--color-grey-50) flex justify-center items-center">
      <Spinner className="size-16 text-(--color-primary-500)" />
    </div>
  );
}

export default FullPageSpinner;
