import React from 'react'

const QuoteSection = () => {
  return (
    <section className="py-24 md:py-40 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-8 text-muted-foreground">
          Philosophy
        </p>
        <blockquote className="text-2xl md:text-3xl lg:text-4xl italic leading-relaxed mb-8 text-balance">
          {"\"While common sense takes the road already paved, Uncommon Sense builds its own. We create clothing for those who understand that the ordinary path was never built for extraordinary ambitions.\""}
        </blockquote>
        <cite className="text-sm tracking-widest uppercase not-italic">
          — Uncommon Sense
        </cite>
      </div>
    </section>
  )
}

export default QuoteSection