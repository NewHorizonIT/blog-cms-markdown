import { OptionSelect } from "@/types";

export enum EStatucArticle {
  "DRAFT" = "draft",
  "PUBLISHED" = "published",
}

export const PostFilterStatus: OptionSelect[] = [
  { label: "Tất cả", value: "all" },
  { label: "Đã xuất bản", value: EStatucArticle.PUBLISHED },
  { label: "Nháp", value: EStatucArticle.DRAFT },
];
