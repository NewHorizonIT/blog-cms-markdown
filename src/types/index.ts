import { EStatucArticle } from "@/constant/enum";

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  status: EStatucArticle;
  tags: string[];
  author: string;
  coverImage: string;
}
