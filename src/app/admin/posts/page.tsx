"use client";
import { PostList } from "@/components/shared/post/PostList";
import SearchBox from "@/components/shared/SearchBox";
import { EStatucArticle, PostFilterStatus } from "@/constant/enum";
import { Post } from "@/types";
import React, { useState } from "react";

const AdminPostPage = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      title: "Getting Started with Next.js 15",
      slug: "getting-started-nextjs-15",
      content:
        "# Getting Started with Next.js 15\n\nNext.js 15 brings exciting new features...",
      excerpt: "Learn about the latest features in Next.js 15",
      publishedAt: "2024-01-15",
      status: EStatucArticle.PUBLISHED,
      coverImage: "",
      tags: ["nextjs", "react", "web-development"],
      author: "Admin",
    },
    {
      id: "2",
      title: "Building a Blog with Markdown",
      slug: "building-blog-markdown",
      content:
        "# Building a Blog with Markdown\n\nMarkdown is a lightweight markup language...",
      excerpt: "How to create a blog using markdown files",
      publishedAt: "2024-01-10",
      status: EStatucArticle.PUBLISHED,
      coverImage: "",
      tags: ["markdown", "blog", "cms"],
      author: "Admin",
    },
  ]);

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
      <SearchBox options={PostFilterStatus} />
      <PostList posts={posts} />
    </div>
  );
};

export default AdminPostPage;
