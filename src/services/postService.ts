import axiosInstance from "@/lib/axios";

export const postService = {
  getAll: (params?: Record<string, any>) =>
    axiosInstance.get("/posts", { params }),
  getBySlug: (slug: string) => axiosInstance.get(`/posts/${slug}`),
};
