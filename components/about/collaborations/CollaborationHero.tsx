"use client";

import { motion } from "framer-motion";

export function CollaborationHero() {
  return (
    <div className="relative h-[25vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #dc2626 50%, #7f1d1d 100%)'
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Our Collaborations
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Partnering with leading institutions and industries to advance nanofiber technology
        </p>
        <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
      </motion.div>
    </div>
  );
}