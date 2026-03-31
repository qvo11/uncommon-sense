import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
     <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl mb-4">Uncommon Sense</h3>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              Premium essentials for those with the sense to do things differently.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-[var(--font-sans-body)]">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-[var(--font-sans-body)]">
              <li><Link href="#shop" className="hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link href="#hoodies" className="hover:text-foreground transition-colors">Hoodies</Link></li>
              <li><Link href="#tees" className="hover:text-foreground transition-colors">Tees</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-[var(--font-sans-body)]">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-[var(--font-sans-body)]">
              <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-[var(--font-sans-body)]">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-[var(--font-sans-body)]">
              <li><Link href="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Shipping</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Returns</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Size Guide</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-xs text-muted-foreground font-[var(--font-sans-body)]">
            &copy; {new Date().getFullYear()} Uncommon Sense. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground font-[var(--font-sans-body)]">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer