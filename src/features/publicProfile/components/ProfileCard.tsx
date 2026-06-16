import { Card, CardContent } from "@/components/ui/card";
import Profile from "@/features/publicProfile/components/Profile";
import LinkListProfile from "@/features/publicProfile/components/LinkListProfile";

import { usePublicProfile } from "@/features/publicProfile/hooks/usePublicProfile";
import FullPageSpinner from "@/components/FullPageSpinner";
import { useParams } from "react-router-dom";

function ProfileCard() {
  const { username } = useParams<{ username: string }>();
  const { userProfile, isLoading } = usePublicProfile(username ?? "");

  if (isLoading) return <FullPageSpinner />;

  if (!isLoading) console.log(userProfile);

  return (
    <Card
      className="
            rounded-[40px]
            border-(--color-grey-0)/40
            bg-(--color-grey-0)/50
            backdrop-blur-md
            shadow-md
            px-2
          "
    >
      <CardContent className="p-2 md:p-8">
        {/* Profile */}
        <Profile
          userProfile={{
            bio: userProfile.bio,
            display_name: userProfile.display_name,
            profile_image: userProfile.profile_image,
          }}
        />
        {/* Links */}
        <LinkListProfile links={userProfile.links} />
        {/* Footer */}

        <div
          className="
                mt-10
                text-center
                text-base
                text-(--color-primary-500)
              "
        >
          Made with ❤️ by OMISK
        </div>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
