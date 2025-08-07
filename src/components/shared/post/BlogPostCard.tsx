"use client";

import { Calendar, User, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Post } from "@/types";

interface BlogPostCardProps {
  post: Post;
  featured?: boolean;
}

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 ${
        featured ? "border-primary/20" : ""
      }`}
    >
      <div
        className={`grid ${featured ? "md:grid-cols-2" : "grid-cols-1"} gap-0`}
      >
        {/* Image */}
        {post.coverImage && (
          <div
            className={`relative overflow-hidden ${
              featured ? "md:order-1" : ""
            }`}
          >
            <img
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                featured ? "h-64 md:h-full" : "h-48"
              }`}
            />
            {featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground">
                  Nổi bật
                </Badge>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className={featured ? "md:order-2" : ""}>
          <CardHeader className={featured ? "p-8" : "p-6"}>
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <CardTitle
              className={`group-hover:text-primary transition-colors ${
                featured ? "text-2xl md:text-3xl" : "text-xl"
              }`}
            >
              <Link href={`/articles/${post.slug}`}>{post.title}</Link>
            </CardTitle>

            <CardDescription
              className={`${
                featured ? "text-base" : "text-sm"
              } leading-relaxed`}
            >
              {post.excerpt}
            </CardDescription>
          </CardHeader>

          <CardContent className={featured ? "px-8 pb-8" : "px-6 pb-6"}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                  </span>
                </div>
              </div>

              <Link href={`/articles/${post.slug}`}>
                <Button variant="ghost" size="sm" className="group/btn">
                  Đọc thêm
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
