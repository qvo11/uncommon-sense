import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-4/5 overflow-hidden">
            <Image
              src="/images/daydreamer2.jpeg"
              alt="Our story"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-aston-script mb-8 mt-5">
              Built for The Ambitious
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Uncommon Sense was born from a simple belief: what you wear should support who you&apos;re becoming. We create premium essentials for the artists, entrepreneurs, creators, and visionaries who refuse to settle.
              </p>
              <p>
                Every hoodie, every tee is crafted with intention. We use only the finest organic cotton, designed for both comfort during late-night work sessions and style for the moments that matter.
              </p>
              <p>
                This isn&apos;t just clothing. It&apos;s armor for the uncommon.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl italic mb-1">100%</p>
                <p className="text-xs tracking-widest uppercase leading-tight">Heavy Weight Cotton</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl italic mb-1">2025</p>
                <p className="text-xs tracking-widest uppercase">Founded</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl italic mb-1">50K+</p>
                <p className="text-xs tracking-widest uppercase">Uncommoners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection