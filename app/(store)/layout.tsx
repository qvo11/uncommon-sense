import type { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <span className="text-sm font-semibold tracking-widest uppercase">
            Uncommon Sense
          </span>
          <nav className="flex items-center gap-6 text-sm text-neutral-500">
            <a href="/shop">Shop</a>
            <a href="/cart">Cart</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        {children}
      </main>
      <footer className="border-t border-neutral-200 py-8 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Uncommon Sense
      </footer>
    </>
  );
}
