import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import ProfileAvatar from "@/features/profile/components/ProfileAvatar";
import ProfileForm from "@/features/profile/components/ProfileForm";
import profileFormSchema from "@/features/profile/profileFormScheme";
import { zodResolver } from "@hookform/resolvers/zod";

import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// AtSign

export default function ProfilePage() {
  const {
    currentUser: { username, display_name, bio },
    isLoading: isLoadingUser,
  } = useCurrentUser();

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: username ?? "",
      display_name: display_name ?? "",
      bio: bio ?? "",
      profileImage: undefined,
    },
  });

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="grid xl:grid-cols-[1fr_3fr] lg:grid-cols-[1.5fr_3fr] gap-4">
        <Card className="bg-(--color-primary-50)">
          <CardHeader>
            <CardTitle className="font-bold">Profile Picture</CardTitle>
            <CardDescription>
              Upload a profile picture to personalize your profile.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center ">
            <ProfileAvatar form={form} />
          </CardContent>
        </Card>
        <Card className="ring-0">
          <CardHeader>
            <CardTitle className="font-bold">Personal Information</CardTitle>
            <CardDescription>Update your personal details.</CardDescription>
          </CardHeader>
          <CardContent>
            <ProfileForm form={form} />
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter className="justify-end">
        <Button type="submit" form="profile-form" className="p-5">
          <Save /> Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}
