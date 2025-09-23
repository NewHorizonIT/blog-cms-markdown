"use client";

import { BlogPostCard } from "@/components/shared/post/BlogPostCard";
import BlogPostCardSkeleton from "@/components/shared/post/BlogPostCardSkeleton";
import SearchBox from "@/components/shared/SearchBox";
import { Button } from "@/components/ui/button";
import { usePosts, useSearchPost } from "@/hooks/usePost";
import { Post } from "@/types";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [keySearch, setKeySearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [postsData, setPostsData] = useState<Post[]>([]);

  const { posts, isLoading, isError } = usePosts({ limit: 10, page: 1 });
  useEffect(() => {
    if (posts?.data.data) {
      setPostsData(posts?.data.data);
    }
  }, [posts]);

  const { posts: postSearch } = useSearchPost(keySearch);
  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setKeySearch(keySearch);
      setPostsData(postSearch?.data);
    }
  };

  // Get all unique tags
  const allTags: string[] = Array.from(
    new Set(postsData.flatMap((post: Post) => post.tags))
  );

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
                <SearchBox
                  onSearch={handleSearch}
                  valueInput={keySearch}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setKeySearch(e.target.value)
                  }
                />
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
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
            {postsData.length === 0 ? (
              <h1>không có bài viết nào</h1>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {isLoading
                  ? Array.from({ length: 10 }).map((_, idx) => (
                      <BlogPostCardSkeleton key={idx} />
                    ))
                  : postsData.map((post: Post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
              </div>
            )}

            {/* Blog Posts Grid */}
          </div>
        </div>
      </main>
    </div>
  );
}
