"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Slice, User } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import React from "react";
import { usePostDetail } from "@/hooks/usePost";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const { post, isLoading, isError } = usePostDetail(slug);
  const data = post?.data.data;

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Back Button */}
            <div className="mb-6">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Quay lại blog
                </Button>
              </Link>
            </div>

            {/* Cover Image */}
            {data && (
              <div className="mb-8">
                <img
                  src={data.coverImage || "/placeholder.svg"}
                  alt={data.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Post Header */}
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {data &&
                  data.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {post && data.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {data && data.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{data && data.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {data &&
                      new Date(data.createdAt).toLocaleDateString("vi-VN")}
                  </span>
                </div>
              </div>
            </header>

            {/* POst Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div className="text-foreground leading-8 prose">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {data && data.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
