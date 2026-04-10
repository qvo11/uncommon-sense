import type { ReactNode } from "react";
import { NavBar, Footer } from "@/components/layout";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <NavBar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
