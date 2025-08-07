"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Heart,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & Lead Developer",
      bio: "Passionate về web development với 8+ năm kinh nghiệm. Chuyên về React, Next.js và Node.js.",
      avatar: "/placeholder.svg?height=150&width=150",
      social: {
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
      },
    },
    {
      name: "Jane Smith",
      role: "Content Writer & UX Designer",
      bio: "Chuyên gia về UX/UI design và content strategy. Đam mê tạo ra những trải nghiệm người dùng tuyệt vời.",
      avatar: "/placeholder.svg?height=150&width=150",
      social: {
        twitter: "https://twitter.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
      },
    },
    {
      name: "Mike Johnson",
      role: "Technical Writer",
      bio: "Chuyên viết technical content và documentation. Có khả năng giải thích các khái niệm phức tạp một cách đơn giản.",
      avatar: "/placeholder.svg?height=150&width=150",
      social: {
        github: "https://github.com/mikejohnson",
        linkedin: "https://linkedin.com/in/mikejohnson",
      },
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Đam mê",
      description:
        "Chúng tôi đam mê công nghệ và luôn muốn chia sẻ kiến thức với cộng đồng developer.",
    },
    {
      icon: Users,
      title: "Cộng đồng",
      description:
        "Xây dựng một cộng đồng học tập và phát triển cùng nhau trong lĩnh vực công nghệ.",
    },
    {
      icon: Target,
      title: "Chất lượng",
      description:
        "Cam kết mang đến những bài viết chất lượng cao, được nghiên cứu kỹ lưỡng và thực tế.",
    },
    {
      icon: Lightbulb,
      title: "Sáng tạo",
      description:
        "Luôn tìm kiếm những cách tiếp cận mới và sáng tạo để giải quyết các vấn đề công nghệ.",
    },
  ];

  const stats = [
    { label: "Bài viết đã xuất bản", value: "150+" },
    { label: "Độc giả hàng tháng", value: "50K+" },
    { label: "Năm hoạt động", value: "3+" },
    { label: "Chủ đề đa dạng", value: "20+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Về chúng tôi
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Chúng tôi là một nhóm các developer đam mê công nghệ, luôn muốn
              chia sẻ kiến thức và kinh nghiệm với cộng đồng. Blog này được tạo
              ra với mục đích giúp các developer học hỏi và phát triển kỹ năng.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm">
                Web Development
              </Badge>
              <Badge variant="secondary" className="text-sm">
                React
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Next.js
              </Badge>
              <Badge variant="secondary" className="text-sm">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="text-sm">
                UI/UX
              </Badge>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Sứ mệnh của chúng tôi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Chúng tôi tin rằng kiến thức nên được chia sẻ tự do và dễ tiếp
                  cận. Sứ mệnh của chúng tôi là tạo ra những nội dung chất lượng
                  cao, giúp các developer từ mọi trình độ có thể học hỏi và phát
                  triển kỹ năng của mình.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Chúng tôi không chỉ chia sẻ code mà còn chia sẻ tư duy, kinh
                  nghiệm thực tế và những bài học từ các dự án thực tế.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Tầm nhìn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Chúng tôi hướng tới việc trở thành một trong những nguồn tài
                  liệu đáng tin cậy nhất cho cộng đồng developer Việt Nam. Chúng
                  tôi muốn xây dựng một cộng đồng nơi mọi người có thể học hỏi,
                  chia sẻ và cùng nhau phát triển.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Trong tương lai, chúng tôi sẽ mở rộng sang các định dạng nội
                  dung khác như video tutorials, podcasts và workshops trực
                  tuyến.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Giá trị cốt lõi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những giá trị này định hướng mọi hoạt động của chúng tôi và là nền
              tảng cho sự phát triển bền vững.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Đội ngũ của chúng tôi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gặp gỡ những người đứng sau blog này - một nhóm các chuyên gia đam
              mê công nghệ và giáo dục.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-2">
                    {member.social.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Có câu hỏi, góp ý hoặc muốn hợp tác? Chúng tôi rất mong được nghe
              từ bạn!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">hello@ourblog.com</p>
                <p className="text-muted-foreground">support@ourblog.com</p>
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
                <p className="text-muted-foreground">Hà Nội, Việt Nam</p>
                <p className="text-muted-foreground">Remote Team</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Mạng xã hội</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-center gap-2">
                  <Button variant="outline" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
