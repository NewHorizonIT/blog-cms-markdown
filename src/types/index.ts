import { EStatucArticle } from "@/constant/enum";
import { User } from "@/generated/prisma";

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  createdAt: string;
  status: EStatucArticle;
  tags: string[];
  author: User;
  coverImage: string;
}

export interface OptionSelect {
  label: string;
  value: string;
}
