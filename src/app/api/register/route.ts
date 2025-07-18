import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/utils";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  const holderUser = await prisma.user.findUnique({ where: { email } });

  if (!email || !password) {
    return new Response("Email or Password is empty", { status: 400 });
  }

  if (holderUser) {
    return new Response("Email is already", { status: 400 });
  }

  const hashStr = await hashPassword(password);

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashStr,
    },
  });

  return new Response(
    JSON.stringify({ message: "Tạo tài khoản thành công", user: newUser }),
    { status: 201 }
  );
}
