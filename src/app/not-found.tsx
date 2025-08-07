"use client";

import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Illustration */}
        <div className="relative">
          <div className="text-[200px] md:text-[300px] font-bold text-muted/90 leading-none select-none">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Trang không tồn tại
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Có
            thể trang đã được di chuyển hoặc URL không chính xác.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại trang trước
          </Button>
          <Link href="/blog">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Về trang chủ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
