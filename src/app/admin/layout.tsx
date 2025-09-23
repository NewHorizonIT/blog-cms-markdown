import { SidebarAdmin } from "@/components/shared/SideBarAdmin";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "admin") {
    notFound();
  }
  return (
    <div>
      <SidebarProvider>
        <SidebarAdmin />
        <SidebarInset>
          <main className="p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default layout;
