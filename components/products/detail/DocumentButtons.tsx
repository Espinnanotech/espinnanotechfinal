"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface DocumentButtonsProps {
  documents: {
    label: string;
    url: string;
  }[];
}

export function DocumentButtons({ documents }: DocumentButtonsProps) {
  return (
    <div className="space-y-4">
      {/* <h2 className="text-2xl font-semibold">Documents</h2> */}
      
      <div className="grid grid-cols-4 gap-4 ">
        {documents.map((doc, index) => (
          <motion.a
            key={doc.label}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col  gap-3 bg-gray-700 hover:bg-gray-900 transition-colors p-4 rounded-lg text-white justify-center items-center"
          >
            {/* <FileText className="h-2 w-2 text-red-600" /> */}
            <span className="font-medium">{doc.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}