export interface LinksAnalyticsDTO {
  title: string;

  clicks?: number;
}

export type ClickPeriodQuery = "today" | "week" | "month" | "all";

export type GroupBy = "device_type" | "country" | "browser";
