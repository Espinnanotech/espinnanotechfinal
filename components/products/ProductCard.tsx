"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ProductFeature } from "./ProductFeature";

interface ProductCardProps {
  title: string;
  description: string;
  features: readonly string[]; // Accept readonly arrays
  image: string;
  index: number;
}


export function ProductCard({ title, description, features, image, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border border-gray-200"
    >
      <div className="relative h-48 mb-6">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          // loading="lazy"
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-4 mb-6">
        {features.map((feature, idx) => (
          <ProductFeature key={idx} label={feature} />
        ))}
      </div>
      
      <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
        Learn More
      </button>
    </motion.div>
  );
}