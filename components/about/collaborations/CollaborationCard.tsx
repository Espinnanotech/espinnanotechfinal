"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CollaborationCardProps {
  name: string;
  type: string;
  description: string;
  image: string;
  index: number;
}

export function CollaborationCard({ name, type, description, image, index }: CollaborationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
            {type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}