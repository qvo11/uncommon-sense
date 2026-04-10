import React from 'react'

const Marquee = () => {

const items = ["Heavyweight Cotton", "Free Shipping over $50", "Designed for Comfort", "Built to Last", "For the Everyday Grind", "Premium Basics"]

  return (
    <div className="bg-black text-white py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <span key={j} className="mx-8 text-sm uppercase tracking-widest">
                {item}
                <span className="mx-8 opacity-50">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee