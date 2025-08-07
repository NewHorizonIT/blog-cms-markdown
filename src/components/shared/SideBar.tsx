import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calendar, Clock, Tag, TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";
import { Post } from "@/types";
import Link from "next/link";

interface SidebarProps {
  posts: Post[];
}

const SideBar = ({ posts }: SidebarProps) => {
  // Get recent posts (last 5)
  const recentPosts = posts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 5);

  // Get popular tags
  const tagCounts = posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const popularTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);
  return (
    <div>
      <div className="space-y-6">
        {/* Recent Posts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Bài viết gần đây
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="space-y-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-medium text-sm hover:text-primary transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                  </span>
                </div>
                {post !== recentPosts[recentPosts.length - 1] && (
                  <hr className="my-3" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Popular Tags */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Tag className="h-5 w-5" />
              Tags phổ biến
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(([tag, count]) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tag} ({count})
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Thống kê
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Tổng bài viết
              </span>
              <span className="font-semibold">{posts.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Tổng tags</span>
              <span className="font-semibold">
                {Object.keys(tagCounts).length}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Lượt xem</span>
              <span className="font-semibold">12,345</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SideBar;
