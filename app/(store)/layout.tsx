import type { ReactNode } from "react";
import { NavBar } from "@/components/layout";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <NavBar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        {children}
      </main>
      <footer className="border-t border-neutral-200 py-8 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Uncommon Sense
      </footer>
    </>
  );
}
