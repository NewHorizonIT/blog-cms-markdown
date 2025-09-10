import { EStatucArticle } from "@/constant/enum";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { postSchema } from "@/lib/validation/postSchema";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const result = postSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.errors },
        { status: 400 }
      );
    }
    const newPost = await prisma.post.create({
      data: { ...result.data, authorId: session.user.id! },
    });
    return NextResponse.json({ data: newPost }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const listPost = await prisma.post.findMany({
      where: {
        status: EStatucArticle.PUBLISHED,
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json(
      {
        success: true,
        data: listPost,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
