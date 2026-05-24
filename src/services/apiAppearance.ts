import { apiWithToken } from "@/lib/axios";
import type { SettingDTO } from "@/types/appearance";

export const settingService = {
  getSettings: async () => {
    const { data: res } = await apiWithToken.get("/settings");

    return res;
  },

  updateSettings: async (data: SettingDTO) => {
    const { data: res } = await apiWithToken.patch("/settings", data);
    return res;
  },
};
