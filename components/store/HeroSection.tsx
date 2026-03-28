import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-screen ml-[calc(50%-50vw)] -mt-10 flex-col items-start justify-end pb-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src='/images/hero-lifestyle.jpg'
          alt='Model wearing hoodie'
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Fade overlay */}
      <div className="absolute inset-0 z-10 bg-white/30" />

      {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase mb-6">
          Born for the Ones Who Never Fit the Mold
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl italic leading-tight mb-8 text-balance">
          Wear the Uncommon
        </h2>
        <p className="text-md md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "var(--font-geist), 'Geist Fallback'" }}>
          Premium essentials crafted for the ambitious. Hoodies and tees that move with you as you chase what matters most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/shop">Shop Collection</Button>
          <Button href="/about" variant="outline">Our Story</Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-30 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-geist), 'Geist Fallback'" }}>Scroll</span>
          <div className="w-px h-12 bg-black/30" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
