"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Xin chào {session.user.name}</p>
        <button onClick={() => signOut()}>Đăng xuất</button>
      </>
    );
  }

  return <button onClick={() => signIn("google")}>Đăng nhập với Google</button>;
}
