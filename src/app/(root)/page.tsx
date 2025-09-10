"use client";

import { BlogPostCard } from "@/components/shared/post/BlogPostCard";
import SearchBox from "@/components/shared/SearchBox";
import { Button } from "@/components/ui/button";
import { usePosts } from "@/hooks/usePost";
import { Post } from "@/types";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { posts, isLoading, isError } = usePosts({ limit: 10, page: 1 });
  console.log(posts?.data.data);

  // Get all unique tags
  // const allTags = Array.from(
  //   new Set(posts?.data.flatMap((post: Post) => post.tags))
  // );

  // Filter posts based on search and tag
  // const filteredPosts = blogPosts.filter((post) => {
  //   const matchesSearch =
  //     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  //   const matchesTag = !selectedTag || post.tags.includes(selectedTag);
  //   return matchesSearch && matchesTag;
  // });

  if (isLoading) return <p>Đang tải...</p>;
  if (isError) return <p>Lỗi khi tải dữ liệu.</p>;
  return (
    <div className="container">
      <main className="container mx-auto px-4 py-8">
        <div className="">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Chào bạn đến với blog của NewHorizon
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tôi chủ yếu viết blof về téchtack, Tutorial, best practtice.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="relative">
                <SearchBox />
              </div>

              {/* Tag Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTag === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                >
                  Tất cả
                </Button>
                {/* {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))} */}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts?.data.data.map((post: Post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Không tìm thấy bài viết nào.</p>
              </div>
            )} */}
          </div>
        </div>
      </main>
    </div>
  );
}
