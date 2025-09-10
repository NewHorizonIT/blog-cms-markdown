"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function MarkdownGuide() {
  const examples = [
    {
      title: "Headers",
      syntax: "# H1\n## H2\n### H3",
      description: "Tạo tiêu đề các cấp",
    },
    {
      title: "Text Formatting",
      syntax: "**Bold text**\n*Italic text*\n`Inline code`",
      description: "Định dạng văn bản",
    },
    {
      title: "Images",
      syntax: "![Alt text](image-url)\n![Logo](/logo.png)",
      description: "Chèn hình ảnh",
    },
    {
      title: "Code Blocks",
      syntax: "```javascript\nconsole.log('Hello');\n```",
      description: "Khối code với syntax highlighting",
    },
    {
      title: "Links",
      syntax: "[Link text](https://example.com)",
      description: "Tạo liên kết",
    },
    {
      title: "Lists",
      syntax: "- Item 1\n- Item 2\n- Item 3",
      description: "Danh sách không thứ tự",
    },
    {
      title: "Quotes",
      syntax: "> This is a quote\n> Multiple lines",
      description: "Trích dẫn",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Markdown Guide</CardTitle>
        <CardDescription>Hướng dẫn cú pháp Markdown cơ bản</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {examples.map((example, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {example.title}
              </Badge>
            </div>
            <pre className="bg-muted p-2 rounded text-xs overflow-x-auto">
              <code>{example.syntax}</code>
            </pre>
            <p className="text-xs text-muted-foreground">
              {example.description}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
