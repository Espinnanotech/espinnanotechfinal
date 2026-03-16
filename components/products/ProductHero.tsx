"use client";

import { motion } from "framer-motion";

export function ProductHero() {
  return (
    <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black via-red-900 to-black"
        style={{
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Our Products
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Discover our range of advanced electrospinning units designed for 
          cutting-edge nanofiber research and production
        </p>
      </motion.div>
    </div>
  );
}