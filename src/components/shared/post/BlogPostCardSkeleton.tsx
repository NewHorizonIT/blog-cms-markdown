import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const BlogPostCardSkeleton = () => {
  return (
    <Skeleton className="group hover:shadow-lg transition-all duration-300 p-0 cursor-pointer h-[300px] lg:w-[300px]"></Skeleton>
  );
};

export default BlogPostCardSkeleton;
