import ProfileCard from "@/features/publicProfile/components/ProfileCard";

export default function PublicProfilePage() {
  return (
    <main
      className="
        bg-linear-to-br
        from-(--color-grey-0)
        via-(--color-primary-50)
        to-(--color-primary-100)
        p-4
        h-screen
      "
    >
      <div className="w-[95%] xl:w-[40%]  sm:w-[60%] mx-auto">
        <ProfileCard />
      </div>
    </main>
  );
}
