"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <div className="relative h-[15vh] flex items-center justify-center overflow-hidden mt-20">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #dc2626 50%, #7f1d1d 100%)'
        }}
      />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          About Us
        </h1>
        <div className="w-50 h-1 bg-black mx-auto rounded-full"></div>
      </motion.div>
    </div>
  );
}