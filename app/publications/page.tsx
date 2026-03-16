"use client";

import { motion } from "framer-motion";
import { PublicationTable } from "@/components/publications/PublicationTable";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="relative h-[20vh] flex items-center justify-center overflow-hidden">
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
            Publications
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Our research contributions to the field of nanofiber technology
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
        >
          <PublicationTable />
        </motion.div>
      </div>
    </main>
  );
}