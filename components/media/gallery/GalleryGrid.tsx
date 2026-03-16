"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { MediaType } from "@/app/media/gallery/page";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  type: "photo" | "video";
  thumbnail: string;
  videoUrl?: string;
  category: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Research Laboratory Tour",
    description: "Take a virtual tour of our state-of-the-art research facilities",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1581093458791-9d58e59c3e3d?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://example.com/videos/lab-tour.mp4",
    category: "Facilities"
  },
  {
    id: 2,
    title: "Manufacturing Process",
    description: "Watch our advanced manufacturing process in action",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1581093804475-577d72e31202?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://example.com/videos/manufacturing.mp4",
    category: "Production"
  },
  {
    id: 3,
    title: "Quality Control Lab",
    description: "Our dedicated quality control laboratory",
    type: "photo",
    thumbnail: "",
    category: "Quality"
  },
  {
    id: 4,
    title: "Team Collaboration",
    description: "Our team working together on innovative solutions",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1581093577421-f561c1a46d01?auto=format&fit=crop&q=80&w=800",
    category: "Team"
  },
  {
    id: 5,
    title: "Product Testing Demo",
    description: "See our rigorous testing procedures in action",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1581093458478-6ca8065b6bfc?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://example.com/videos/testing.mp4",
    category: "Research"
  },
  {
    id: 6,
    title: "Innovation Center",
    description: "Where groundbreaking ideas come to life",
    type: "photo",
    thumbnail: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800",
    category: "Facilities"
  }
];

interface GalleryGridProps {
  activeTab: MediaType;
}

export function GalleryGrid({ activeTab }: GalleryGridProps) {
  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeTab === "all" || 
    (activeTab === "photos" && item.type === "photo") ||
    (activeTab === "videos" && item.type === "video")
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <div className="relative aspect-video">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">
                  {item.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full capitalize">
                  {item.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}