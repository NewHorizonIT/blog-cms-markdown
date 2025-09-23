import { EStatucArticle } from "@/constant/enum";
import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(3, "Tiêu đề phải có ít nhất 3 ký tự"),
  content: z.string().min(10, "Nội dung phải có ít nhất 10 ký tự"),
  slug: z.string().min(1, "Slug là bắt buộc"),
  tags: z.array(z.string()).optional(), // Optional nếu bạn muốn cho phép rỗng
  coverImage: z.string().url("URL ảnh không hợp lệ").optional(),
  excerpt: z.string().optional(),
  status: z.nativeEnum(EStatucArticle).default(EStatucArticle.DRAFT), // hoặc dùng z.nativeEnum(PostStatus)
});

export const updateSchemaPost = postSchema.partial();

export type PostData = z.infer<typeof postSchema>;
