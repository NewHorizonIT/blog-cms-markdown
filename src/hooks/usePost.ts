import { postService } from "@/services/postService";
import queryString from "query-string";
import useSWR from "swr";

export const usePosts = (params?: Record<string, any>) => {
  const qs = params ? `?${queryString.stringify(params)}` : "";

  const { data, isLoading, error, mutate } = useSWR(
    `/posts${qs}`,
    () => postService.getAll(params),
    {
      // revalidateOnMount: false,
      revalidateOnFocus: false,
    }
  );

  return {
    posts: data,
    isLoading,
    isError: !!error,
    mutate,
  };
};

export const usePostDetail = (slug: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    `/posts/${slug}`,
    () => postService.getBySlug(slug),
    {
      // revalidateOnMount: false,
      revalidateOnFocus: false,
    }
  );

  return {
    post: data,
    isLoading,
    isError: !!error,
    mutate,
  };
};
