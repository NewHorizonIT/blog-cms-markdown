import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const keySearch = searchParams.get("key");

  if (!keySearch) {
    const posts = await prisma.post.findMany({
      skip: 0,
      take: 10,
    });

    return NextResponse.json({ success: true, data: posts }, { status: 200 });
  }

  const posts = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: keySearch!,
            mode: "insensitive",
          },
        },
        {
          content: {
            contains: keySearch!,
            mode: "insensitive",
          },
        },
      ],
    },
  });

  return NextResponse.json({ success: true, data: posts }, { status: 200 });
}
