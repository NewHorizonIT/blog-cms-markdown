"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Save,
  X,
  ImageIcon,
  Code,
  Bold,
  Italic,
  Link,
  List,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/types";
import { MarkdownGuide } from "./MarkdownGuide";

// 🔹 Import react-markdown và plugins
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // theme highlight

export function PostEditor() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            {"Bài viết mới"}
          </h2>
          <p className="text-muted-foreground">
            Tạo và chỉnh sửa nội dung blog của bạn.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Nội dung</CardTitle>
              <CardDescription>
                Viết nội dung bài viết bằng Markdown
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="edit" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="edit">Chỉnh sửa</TabsTrigger>
                  <TabsTrigger value="preview">Xem trước</TabsTrigger>
                </TabsList>
                <TabsContent value="edit" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Tiêu đề</Label>
                    <Input id="title" placeholder="Nhập tiêu đề bài viết..." />
                  </div>

                  {/* Toolbar */}
                  {/* ... giữ nguyên toolbar insert Markdown ... */}

                  <div className="space-y-2">
                    <Label htmlFor="content">Nội dung Markdown</Label>
                    <Textarea
                      id="content"
                      placeholder="# Tiêu đề bài viết..."
                      className="min-h-[400px] font-mono"
                    />
                  </div>

                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </TabsContent>
                <TabsContent value="preview" className="space-y-4">
                  <div className="border rounded-lg p-6 min-h-[400px] bg-background">
                    <div className="prose dark:prose-invert max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}
                      >
                        {"Chưa có nội dung để xem trước..."}
                      </ReactMarkdown>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar giữ nguyên */}
        <div className="space-y-6"></div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline">
          <X className="h-4 w-4 mr-2" />
          Hủy
        </Button>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Lưu
        </Button>
      </div>
    </div>
  );
}
