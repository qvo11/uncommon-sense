"use client";

import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types";

type ProductCardProps = {
  slug: string;
  category: Category;
  name: string;
  price: number; // in cents
  image: string;
};

export default function ProductCard({
  slug,
  category,
  name,
  price,
  image,
}: ProductCardProps) {
  const href = `/shop/${category}/${slug}`;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);

  return (
    <Link href={href} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick Add — slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <button
            className="w-full bg-white py-3 text-xs font-medium tracking-widest uppercase text-neutral-950 hover:bg-neutral-950 hover:text-white transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              // TODO: add to cart
            }}
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-0.5">
        <p className="text-xs uppercase tracking-widest text-neutral-400">
          {category}
        </p>
        <p className="text-sm font-medium text-neutral-950">{name}</p>
        <p className="text-sm text-neutral-600">{formattedPrice}</p>
      </div>
    </Link>
  );
}
