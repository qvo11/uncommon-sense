import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: "Hoodies",
    description: "Premium comfort for endless pursuits",
    image: "/images/hoodie-cloud.jpg",
    href: "#hoodies",
    count: "3 Products"
  },
  {
    name: "Tees",
    description: "Essential layers for daily dreamers",
    image: "/images/tee-dawn.jpg",
    href: "#tees",
    count: "3 Products"
  }
]

const ProductCategories = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden aspect-4/5 md:aspect-3/4"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/60 via-foreground/20 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-background">
                <p className="text-xs tracking-widest uppercase mb-2">
                  {category.count}
                </p>
                <h3 className="text-4xl md:text-5xl uppercase mb-3">{category.name}</h3>
                <p className="text-sm mb-4 opacity-80">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-sm tracking-widest uppercase group-hover:gap-4 transition-all">
                  <span>Shop Now</span>
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories