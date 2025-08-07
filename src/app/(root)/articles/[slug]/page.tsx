"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EStatucArticle } from "@/constant/enum";
import { Post } from "@/types";
import {
  ArrowLeft,
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  User,
} from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import React from "react";

// Sample blog posts data (in real app, this would come from API/database)
const blogPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    slug: "getting-started-nextjs-15",
    content: `# Getting Started with Next.js 15

Next.js 15 brings exciting new features including improved performance, better developer experience, and enhanced security features.

## What's New in Next.js 15

### 1. Enhanced Performance
Next.js 15 introduces several performance improvements:
- Faster build times
- Optimized bundle sizes
- Improved server-side rendering

### 2. Better Developer Experience
The development experience has been significantly improved with:
- Enhanced error messages
- Better debugging tools
- Improved hot reload

## Getting Started

To get started with Next.js 15, run the following command:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

### Project Structure
Your Next.js 15 project will have the following structure:

\`\`\`
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
├── next.config.js
└── package.json
\`\`\`

## Key Features

### App Router
The App Router is now stable and provides:
- File-based routing
- Nested layouts
- Server components by default

### Server Components
Server Components allow you to:
- Reduce bundle size
- Improve performance
- Access backend resources directly

## Example Component

Here's a simple example of a Server Component:

\`\`\`tsx
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js 15!</h1>
      <p>This is a server component.</p>
    </div>
  )
}
\`\`\`

## Conclusion

Next.js 15 is a significant update that brings many improvements to both performance and developer experience. Whether you're building a simple blog or a complex web application, Next.js 15 provides the tools you need to succeed.

![Next.js Logo](/placeholder.svg?height=300&width=600&query=nextjs logo development)

Start building with Next.js 15 today and experience the future of React development!`,
    excerpt:
      "Learn about the latest features in Next.js 15 and how to get started with this powerful React framework.",
    publishedAt: "2024-01-15",
    status: EStatucArticle.published,
    tags: ["nextjs", "react", "web-development"],
    author: "John Doe",
    coverImage: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "4",
    title: "CSS Grid vs Flexbox: When to Use What",
    slug: "css-grid-vs-flexbox",
    content: `# CSS Grid vs Flexbox: When to Use What

Both CSS Grid and Flexbox are powerful layout systems, but they serve different purposes and excel in different scenarios.

## Understanding the Fundamentals

### CSS Grid
CSS Grid is a **two-dimensional** layout system that allows you to work with both rows and columns simultaneously.

### Flexbox
Flexbox is a **one-dimensional** layout system that works with either a row or a column at a time.

## When to Use CSS Grid

### 1. Complex Layouts
Use CSS Grid when you need to create complex, two-dimensional layouts:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 20px;
}
\`\`\`

### 2. Page Layouts
Perfect for overall page structure:
- Header, main content, sidebar, footer layouts
- Magazine-style layouts
- Dashboard layouts

### 3. Overlapping Elements
Grid makes it easy to overlap elements:

\`\`\`css
.overlay-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.overlay-grid > * {
  grid-column: 1;
  grid-row: 1;
}
\`\`\`

## When to Use Flexbox

### 1. Component Layouts
Use Flexbox for component-level layouts:

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column;
}
\`\`\`

### 2. Centering Content
Flexbox excels at centering:

\`\`\`css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

### 3. Dynamic Content
When content size is unknown:

\`\`\`css
.flexible-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.flexible-item {
  flex: 1 1 300px; /* grow, shrink, basis */
}
\`\`\`

## Practical Examples

### Example 1: Card Layout (Flexbox)
\`\`\`css
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-content {
  flex: 1; /* Takes remaining space */
}

.card-actions {
  margin-top: auto; /* Pushes to bottom */
}
\`\`\`

### Example 2: Dashboard Layout (Grid)
\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
}
\`\`\`

## Browser Support

Both CSS Grid and Flexbox have excellent browser support:
- **Flexbox**: Supported in all modern browsers
- **CSS Grid**: Supported in all modern browsers (IE 11 with prefixes)

## Best Practices

### Use Grid For:
- ✅ Page layouts
- ✅ Two-dimensional layouts
- ✅ When you need precise control over rows and columns
- ✅ Overlapping elements

### Use Flexbox For:
- ✅ Component layouts
- ✅ One-dimensional layouts
- ✅ Centering content
- ✅ Dynamic/flexible content

## Conclusion

You don't have to choose between Grid and Flexbox - they work great together! Use Grid for your overall page layout and Flexbox for your components.

![CSS Layout Comparison](/placeholder.svg?height=400&width=700&query=css grid flexbox comparison layout)

The key is understanding that Grid is for layout and Flexbox is for alignment and distribution of space within that layout.`,
    excerpt:
      "A comprehensive guide to choosing between CSS Grid and Flexbox for your layouts.",
    publishedAt: "2024-01-01",
    status: EStatucArticle.published,
    tags: ["css", "layout", "frontend"],
    author: "Sarah Wilson",
    coverImage: "/placeholder.svg?height=400&width=800",
  },
];

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Back Button */}
            <div className="mb-6">
              <Link href="/blog">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Quay lại blog
                </Button>
              </Link>
            </div>

            {/* Cover Image */}
            {post && post.coverImage && (
              <div className="mb-8">
                <img
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Post Header */}
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post &&
                  post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {post && post.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {post && post.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post && post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {post &&
                      new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                  </span>
                </div>
              </div>
            </header>

            {/* Post Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div className="text-foreground leading-8">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {post && post.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
