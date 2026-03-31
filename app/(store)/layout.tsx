import type { ReactNode } from "react";
import { NavBar, Footer } from "@/components/layout";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <NavBar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        {children}
      </main>
      <Footer />
    </>
  );
}
