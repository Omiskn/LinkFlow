export interface LinkDTO {
  link_id?: number;
  title: string;
  url: string;
  icon?: string;
  link_type?: string;
  is_active?: boolean;
  position?: number;
  click_count?: number;
  created_at?: Date;
  updated_at?: Date;
}

export type EditLinkParams = {
  data: Partial<LinkDTO>; // أو LinkDTO حسب مشروعك
  editId: number;
};

// data_shape = {
//   link_id: 5,
//   title: "GitHub",
//   url: "https://github.com/omisk",
//   icon: "github",
//   link_type: "social",
//   is_active: true,
//   position: 1,
//   click_count: 0,
//   created_at: "2026-05-16T08:27:22.985Z",
//   updated_at: "2026-05-16T08:27:22.985Z",
// };
