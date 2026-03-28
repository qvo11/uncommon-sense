import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Uncommon Sense",
  description: "Premium hoodies and tees crafted for dreamers. Wear your ambition.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geist.variable} h-full`}>
        <body className="min-h-full bg-white text-neutral-950 antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
