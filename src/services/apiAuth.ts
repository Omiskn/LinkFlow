import { api } from "@/lib/axios";

export type RegisterDTO = {
  username: string;
  email: string;
  password: string;
};

export type LoginDTO = {
  email: string;
  password: string;
};

export const authService = {
  register: async (data: RegisterDTO) => {
    const { data: res } = await api.post("/users/register", data);
    return res;
  },

  login: async (data: LoginDTO) => {
    const { data: res } = await api.post("/users/login", data);
    return res;
  },

  verifyEmail: async (token: string) => {
    const { data: res } = await api.get("/users/verify-email", {
      params: { token },
    });
    return res;
  },

  getMe: async () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const { data: res } = await api.get("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  },
};
