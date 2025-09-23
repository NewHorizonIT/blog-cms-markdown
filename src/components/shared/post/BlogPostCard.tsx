"use client";

import { Calendar, User, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Post } from "@/types";
import Image from "next/image";

interface BlogPostCardProps {
  post: Post;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 p-0 cursor-pointer">
      <div className="grid grid-cols-1">
        {/* Image */}
        <div className="relative overflow-hidden ">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105
                 h-48"
          />
        </div>

        {/* Content */}
        <div>
          <CardHeader className="px-5 py-3">
            <div className="text-muted-foreground flex justify-between text-sm">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.createdAt).toLocaleDateString("vi-VN")}
                </span>
              </div>
            </div>

            <CardTitle
              className="group-hover:text-primary transition-colors
                 text-xl"
            >
              <Link href={`/articles/${post.slug}`}>{post.title}</Link>
            </CardTitle>

            <CardDescription className="text-sm leading-relaxed">
              {post.excerpt}
            </CardDescription>
          </CardHeader>

          <CardContent className="px-5 pb-5">
            <Link
              href={`/articles/${post.slug}`}
              className="text-primary flex items-center font-medium text-base group/btn"
            >
              Đọc thêm
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-2" />
            </Link>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
