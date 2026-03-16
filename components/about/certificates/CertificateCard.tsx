"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CertificateCardProps {
  name: string;
  image: string;
  index: number;
}

export function CertificateCard({ name, image, index }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-32 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
      </div>
    </motion.div>
  );
}