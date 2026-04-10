import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-medium mb-4">Uncommon Sense</h3>
            <p className="text-sm text-white/60 italic leading-relaxed font-medium">
              Premium essentials for those with the sense to do things differently.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-medium">Shop</h4>
            <ul className="space-y-3 text-sm text-white/60 font-medium">
              <li><Link href="#shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="#hoodies" className="hover:text-white transition-colors">Hoodies</Link></li>
              <li><Link href="#tees" className="hover:text-white transition-colors">Tees</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-medium">Company</h4>
            <ul className="space-y-3 text-sm text-white/60 font-medium">
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-medium">Support</h4>
            <ul className="space-y-3 text-sm text-white/60 font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Size Guide</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-xs text-white/40 font-medium">
            &copy; {new Date().getFullYear()} Uncommon Sense. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer