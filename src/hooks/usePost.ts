import { postService } from "@/services/postService";
import { Post } from "@/types";
import queryString from "query-string";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export const usePosts = (params?: Record<string, string | number>) => {
  const qs = params ? `?${queryString.stringify(params)}` : "";

  const { data, isLoading, error, mutate } = useSWR(
    `/posts${encodeURIComponent(qs)}`,
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

export const useSearchPost = (keySearch: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    `/posts/search?key=${encodeURIComponent(keySearch)}`,
    () => postService.searchByKey(keySearch)
  );

  return {
    posts: data,
    isLoading,
    isError: !!error,
    mutate,
  };
};

export const useCreatePost = () => {
  const { trigger, data, error, isMutating } = useSWRMutation(
    "/posts",
    (_url, { arg }: { arg: Omit<Post, "id" | "createdAt" | "author"> }) =>
      postService.createPost(arg)
  );

  return {
    createPost: trigger,
    data,
    error,
    isMutating,
  };
};
