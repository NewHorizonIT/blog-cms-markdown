"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  const [avatar, setAvatar] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    avatar: "",
  });

  // Fetch user info from API
  const fetchUserInfo = async () => {
    try {
      const response = await fetch("/api/account/profile");
      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  // Handle avatar upload
  const handleAvatarUpload = async (event: any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await fetch("/api/account/upload-avatar", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setAvatar(data.avatarUrl);
      fetchUserInfo(); // Refresh user info
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  // Fetch user info on component mount
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Thông Tin Tài Khoản
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <img
                  src={avatar || userInfo.avatar || "/placeholder.svg"}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <label htmlFor="avatar-upload" className="mt-4">
                <Button variant="outline" asChild>
                  <span>Upload Avatar</span>
                </Button>
                <Input
                  id="avatar-upload"
                  type="file"
                  className="hidden"
                  onChange={handleAvatarUpload}
                />
              </label>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground">
                  Tên
                </label>
                <Input
                  type="text"
                  value={userInfo.name}
                  readOnly
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  value={userInfo.email}
                  readOnly
                  className="w-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
