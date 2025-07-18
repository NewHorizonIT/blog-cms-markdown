import AuthButton from "@/components/AuthButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="p-5 w-[400px] ">
        <CardHeader className="text-center text-2xl font-bold ">
          Welcome to NHBlog
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardAction>
          <Button asChild variant="outline">
            <AuthButton />
          </Button>
        </CardAction>
      </Card>
    </div>
  );
};

export default layout;
