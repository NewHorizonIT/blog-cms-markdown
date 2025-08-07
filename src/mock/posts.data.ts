import { Post } from "@/types";
import { EStatucArticle } from "@/constant/enum";

// Sample blog posts data
export const blogPosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    slug: "getting-started-nextjs-15",
    content:
      "# Getting Started with Next.js 15\n\nNext.js 15 brings exciting new features including improved performance, better developer experience, and enhanced security features...",
    excerpt:
      "Learn about the latest features in Next.js 15 and how to get started with this powerful React framework.",
    publishedAt: "2024-01-15",
    status: EStatucArticle.published,
    tags: ["nextjs", "react", "web-development"],
    author: "John Doe",
    coverImage: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "2",
    title: "Building a Blog with Markdown",
    slug: "building-blog-markdown",
    content:
      "# Building a Blog with Markdown\n\nMarkdown is a lightweight markup language that's perfect for writing blog content...",
    excerpt:
      "How to create a modern blog using markdown files and static site generation.",
    publishedAt: "2024-01-10",
    status: EStatucArticle.published,
    tags: ["markdown", "blog", "cms"],
    author: "Jane Smith",
    coverImage: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "3",
    title: "TypeScript Best Practices 2024",
    slug: "typescript-best-practices-2024",
    content:
      "# TypeScript Best Practices 2024\n\nTypeScript continues to evolve and here are the best practices for 2024...",
    excerpt:
      "Essential TypeScript patterns and practices every developer should know in 2024.",
    publishedAt: "2024-01-05",
    status: EStatucArticle.published,
    tags: ["typescript", "javascript", "best-practices"],
    author: "Mike Johnson",
    coverImage: "/placeholder.svg?height=400&width=800",
  },
  {
    id: "4",
    title: "CSS Grid vs Flexbox: When to Use What",
    slug: "css-grid-vs-flexbox",
    content:
      "# CSS Grid vs Flexbox\n\nBoth CSS Grid and Flexbox are powerful layout systems...",
    excerpt:
      "A comprehensive guide to choosing between CSS Grid and Flexbox for your layouts.",
    publishedAt: "2024-01-01",
    status: EStatucArticle.published,
    tags: ["css", "layout", "frontend"],
    author: "Sarah Wilson",
    coverImage: "/placeholder.svg?height=400&width=800",
  },
];
