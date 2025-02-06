"use client"; // Important for ClerkProvider

import { ClerkProvider } from "@clerk/nextjs";



export function Providers({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
