"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ExternalLink } from "lucide-react";

interface GalleryCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  externalLink: string;
  index: number;
}

export function GalleryCard({ 
  title, 
  description, 
  image, 
  date, 
  category,
  externalLink,
  index 
}: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
        >
          View More
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}