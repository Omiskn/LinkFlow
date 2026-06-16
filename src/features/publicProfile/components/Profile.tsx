import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type ProfileProps = {
  userProfile: UserProfile;
};

type UserProfile = {
  bio: string;
  display_name: string;
  profile_image: string;
};

function Profile({ userProfile }: ProfileProps) {
  return (
    <section className="flex flex-col items-center">
      <Avatar
        className="
                  h-40
                  w-40
                  border-4
                  border-(--color-grey-0)
                  shadow-md
                "
      >
        <AvatarImage src={userProfile.profile_image} />

        <AvatarFallback>
          {userProfile.display_name.slice(2).toLocaleUpperCase()}
        </AvatarFallback>
      </Avatar>

      <h1
        className="
                text-(--color-grey-800)
                  mt-3
                  text-center
                  font-bold
                  text-xl
                  tracking-tight
                "
      >
        {userProfile.display_name}
      </h1>

      <p
        className="
                  mt-1
                  text-sm
                  text-(--color-grey-500)
                "
      >
        @ahmed.dev
      </p>

      <p
        className="
                  mt-4
                  max-w-md
                  text-center
                  text-lg
                  text-(--color-grey-500)
                "
      >
        {userProfile.bio}
      </p>
    </section>
  );
}

export default Profile;
