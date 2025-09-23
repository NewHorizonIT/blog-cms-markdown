"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin } from "lucide-react";

export default function AboutPage() {
  const personalInfo = {
    name: "Anh Quân",
    role: "Web Developer & Blogger",
    bio: "Tôi là một developer đam mê công nghệ. Tôi tạo ra blog này để chia sẻ kiến thức, kinh nghiệm và giúp cộng đồng developer phát triển kỹ năng.",
    avatar: "/avatar.png",
    location: "Hồ Chí Minh, Việt Nam",
    email: "johndoe@example.com",
    social: {
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    interests: ["Web Development", "React", "Next.js", "TypeScript", "UI/UX"],
  };

  const websiteInfo = {
    name: "Blog CMS Markdown",
    description:
      "Blog CMS Markdown là nơi chia sẻ kiến thức, kinh nghiệm và các bài viết chuyên sâu về lập trình web. Tôi tập trung vào các công nghệ hiện đại như React, Next.js, TypeScript và nhiều hơn nữa, nhằm giúp các developer nâng cao kỹ năng và phát triển sự nghiệp.",
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 items-center gap-8">
          <div className="mx-auto md:mx-0 rounded overflow-hidden flex justify-center">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-primary font-medium text-lg mb-4">
              {personalInfo.role}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Về Blog CMS Markdown</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {websiteInfo.description}
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Liên hệ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{personalInfo.email}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Địa chỉ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
