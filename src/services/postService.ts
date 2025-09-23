import axiosInstance from "@/lib/axios";
import { Post } from "@/types";

export const postService = {
  getAll: (params?: Record<string, any>) =>
    axiosInstance.get("/posts", { params }),
  getBySlug: (slug: string) => axiosInstance.get(`/posts/${slug}`),
  searchByKey: (keySearch: string) =>
    axiosInstance.get(`/posts/search`, {
      params: { key: keySearch },
    }),
  createPost: (data: Omit<Post, "id" | "createdAt" | "author">) =>
    axiosInstance.post("/posts", data),
};
