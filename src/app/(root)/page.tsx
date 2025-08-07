"use client";

import { BlogPostCard } from "@/components/shared/post/BlogPostCard";
import SideBar from "@/components/shared/SideBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts } from "@/mock/posts.data";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  // Filter posts based on search and tag
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });
  return (
    <div className="container">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Welcome to Our Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the latest insights, tutorials, and best practices in
                web development, design, and technology.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
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

            {/* Blog Posts Grid */}
            <div className="grid gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard
                  key={post.id}
                  post={post}
                  featured={index === 0}
                />
              ))}
            </div>

            {/* {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Không tìm thấy bài viết nào.</p>
              </div>
            )} */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SideBar posts={blogPosts} />
          </div>
        </div>
      </main>
    </div>
  );
}
