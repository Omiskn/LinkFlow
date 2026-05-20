import * as z from "zod";

const profileFormSchema = z.object({
  username: z
    .string()
    .min(4, "should be more than 4 chars")
    .max(18, "should be less than 18 chars"),

  display_name: z
    .string()
    .min(4, "should be more than 4 chars")
    .max(18, "should be less than 18 chars"),

  bio: z.string().max(200, "should be less than 200 chars"),

  profileImage: z
    .file()
    .max(2 * 1024 * 1024, "Max file size is 2MB")
    .mime(["image/png", "image/jpeg", "image/webp"])
    .optional(),
});

export default profileFormSchema;
