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
import React from "react";

const CardPost = ({ post }: { post: Post }) => {
  return (
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
              post.status === EStatucArticle.PUBLISHED ? "default" : "secondary"
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
              {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
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
  );
};

export default CardPost;
