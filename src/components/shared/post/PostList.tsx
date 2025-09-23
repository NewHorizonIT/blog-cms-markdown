"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EStatucArticle } from "@/constant/enum";
import { Post } from "@/types";
import { Calendar, Edit, Eye, Tag, Trash2 } from "lucide-react";

export function PostList({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) return <h1>Không có bài viết</h1>;
  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">
                    {post.title || "Bài viết chưa có tiêu đề"}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </div>
                <Badge
                  variant={
                    post.status === EStatucArticle.PUBLISHED
                      ? "default"
                      : "secondary"
                  }
                >
                  {post.status === EStatucArticle.PUBLISHED
                    ? "Đã xuất bản"
                    : "Bản nháp"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.createdAt).toLocaleDateString("vi-VN")}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {post.tags.length} tags
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Không tìm thấy bài viết nào.</p>
        </div>
      )}
    </div>
  );
}
