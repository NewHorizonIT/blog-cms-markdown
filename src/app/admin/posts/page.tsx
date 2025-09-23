"use client";
import { PostList } from "@/components/shared/post/PostList";
import { Button } from "@/components/ui/button";
import { usePosts } from "@/hooks/usePost";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const AdminPostPage = () => {
  const { posts } = usePosts();
  const data = posts?.data.data;

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Bài viết</h2>
          <p className="text-muted-foreground">
            Quản lý tất cả bài viết trên blog của bạn.
          </p>
        </div>
      </div>
      {/* <SearchBox options={PostFilterStatus} /> */}
      <PostList posts={data} />
      <Link href={"posts/new"}>
        <Button className="w-[50px] h-[50px] flex justify-center items-center fixed bottom-5 right-5 z-10 cursor-pointer">
          <Plus color="white" />
        </Button>
      </Link>
    </div>
  );
};

export default AdminPostPage;
