import { api, apiWithToken } from "@/lib/axios";
import type { ClickDTO, ClickPeriodQuery, GroupBy } from "@/types/clicks";

export const clickService = {
  getStats: async () => {
    const { data: res } = await apiWithToken.get("/clicks/stats");

    return res;
  },

  getGroupAnalytics: async (
    groupBy: GroupBy,
    period: ClickPeriodQuery = "all",
  ) => {
    const { data: res } = await apiWithToken.get(
      `/clicks/grouped?by=${groupBy}&period=${period}`,
    );

    return res;
  },

  getLinksAnalytics: async (period: ClickPeriodQuery = "all") => {
    const { data: res } = await apiWithToken.get(
      `/clicks/links?period=${period}`,
    );

    return res;
  },

  create: async ({ linkId, data }: ClickDTO) => {
    const { data: res } = await api.post(`/clicks/${linkId}`, data);

    return res;
  },
};
