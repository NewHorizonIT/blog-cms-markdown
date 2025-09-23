import { EStatucArticle } from "@/constant/enum";

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  createdAt: string;
  status: EStatucArticle;
  tags: string[];
  author: any;
  coverImage: string;
}

export interface OptionSelect {
  label: string;
  value: string;
}
