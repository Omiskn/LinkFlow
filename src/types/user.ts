export type RegisterDTO = {
  username: string;
  email: string;
  password: string;
};

export type UpdateUserDTO = {
  username: string;
  display_name?: string;
  bio?: string;
  profileImage?: File;
};

export type LoginDTO = {
  email: string;
  password: string;
};
