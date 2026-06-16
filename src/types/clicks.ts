export interface LinksAnalyticsDTO {
  title: string;

  clicks?: number;
}

export type ClickMetaDTO = {
  country?: string | null;
  device_type?: string;
  browser?: string;
};

export type ClickPeriodQuery = "today" | "week" | "month" | "all";

export type GroupBy = "device_type" | "country" | "browser";

export type ClickDTO = { linkId: number; data: ClickMetaDTO };
