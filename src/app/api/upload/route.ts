import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const publicId = `nextjs-posts/${file.name.replace(/\.[^/.]+$/, "")}`;

    try {
      const existing = await cloudinary.api.resource(publicId);
      if (existing) {
        return NextResponse.json({ url: existing.secure_url });
      }
    } catch (err: any) {
      console.log("Upload error");
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "nextjs-posts", resource_type: "image" },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json(
      { url: result.secure_url, success: true },
      { status: 201 }
    );
  } catch (err: any) {
    console.log("Upload file error: ", err.message);
    return NextResponse.json(
      { error: err.message, success: false },
      { status: 500 }
    );
  }
}
