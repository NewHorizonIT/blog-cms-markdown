import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { compare, hash } from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function hashPassword(password: string): Promise<string> {
  const hashStr = await hash(password, 10);
  return hashStr;
}

export async function comparePassword(
  hashStr: string,
  password: string
): Promise<boolean> {
  const isCompare = await compare(password, hashStr);
  if (isCompare) {
    return true;
  }

  return false;
}
