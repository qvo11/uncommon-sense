import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-background backdrop-blur-sm">
      <div className="mx-auto grid h-18 max-w-6xl grid-cols-3 items-center px-6">
        {/* Left Nav */}
        <nav className="flex items-center gap-6 text-sm text-neutral">
          <Link href="/shop">Shop</Link>
          <Link href="/shop/hoodies">Hoodies</Link>
          <Link href="/shop/tees">Tees</Link>
        </nav>

        {/* Center */}
        <Link
          href="/"
          className="text-center text-md font-semibold tracking-widest uppercase"
        >
          Uncommon Sense
        </Link>

        {/* Right Nav */}
        <nav className="flex items-center justify-end gap-6 text-sm text-neutral">
          <Link href="/about">About</Link>
          <Link href="/cart" aria-label="Cart" className="relative">
              <ShoppingBag className="size-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
