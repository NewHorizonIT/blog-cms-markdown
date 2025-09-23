"use client";

import { useState } from "react";
import { Save, X } from "lucide-react";
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
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { useCreatePost } from "@/hooks/usePost";
import { useUploadImage } from "@/hooks/useUpload";
import { toast } from "sonner";
import type { Post } from "@/types";
import slugify from "slugify";
import { EStatucArticle } from "@/constant/enum";

export function PostEditor() {
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState<Omit<Post, "id" | "createdAt" | "author">>({
    title: "",
    content: "",
    slug: "",
    tags: [],
    coverImage: "",
    excerpt: "",
    status: EStatucArticle.DRAFT,
  });

  const { createPost, isMutating: creating } = useCreatePost();
  const { uploadImage, isUploading: uploading } = useUploadImage();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: slugify(value, { lower: true, strict: true }),
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleSubmit = async () => {
    try {
      let coverImage = "";
      if (file) {
        const fd = new FormData();
        fd.append("file", file);
        const res = await uploadImage(fd);
        if (!res.success) {
          toast.error("Upload image faild");
        }
        coverImage = res.url;
      }

      await createPost({ ...form, coverImage });

      toast.success("Bài viết tạo thành công!");

      // Reset form
      setFile(null);
      setForm({
        title: "",
        content: "",
        slug: "",
        tags: [],
        coverImage: "",
        excerpt: "",
        status: EStatucArticle.DRAFT,
      });
    } catch (err) {
      console.error(err);
      toast.error("Có lỗi xảy ra khi tạo bài viết.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Bài viết mới</h2>
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
                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Tiêu đề</Label>
                    <Input
                      id="title"
                      value={form.title}
                      onChange={handleTitleChange}
                      placeholder="Nhập tiêu đề bài viết..."
                    />
                  </div>

                  {/* Slug */}
                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={form.slug}
                      onChange={handleChange}
                      placeholder="slug-tu-tieu-de"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <Label htmlFor="content">Nội dung Markdown</Label>
                    <Textarea
                      id="content"
                      value={form.content}
                      onChange={handleChange}
                      placeholder="# Tiêu đề bài viết..."
                      className="min-h-[400px] font-mono"
                    />
                  </div>

                  {/* Cover Image */}
                  <div className="space-y-2">
                    <Label htmlFor="cover">Ảnh bìa</Label>
                    <Input
                      id="cover"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="preview" className="space-y-4">
                  <div className="border rounded-lg p-6 min-h-[400px] bg-background">
                    <div className="prose dark:prose-invert max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight]}
                      >
                        {form.content || "Chưa có nội dung để xem trước..."}
                      </ReactMarkdown>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6"></div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={() =>
            setForm((prev) => ({ ...prev, title: "", content: "", slug: "" }))
          }
        >
          <X className="h-4 w-4 mr-2" />
          Hủy
        </Button>
        <Button onClick={handleSubmit} disabled={creating || uploading}>
          <Save className="h-4 w-4 mr-2" />
          {creating || uploading ? "Đang lưu..." : "Lưu"}
        </Button>
      </div>
    </div>
  );
}
