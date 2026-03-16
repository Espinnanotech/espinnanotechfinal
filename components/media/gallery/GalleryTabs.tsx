"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MediaType } from "@/app/media/gallery/page";
import { Image as ImageIcon, Film, LayoutGrid } from "lucide-react";

interface GalleryTabsProps {
  activeTab: MediaType;
  onTabChange: (tab: MediaType) => void;
}

const TABS = [
  { id: "all", label: "All Media", icon: LayoutGrid },
  { id: "photos", label: "Photos", icon: ImageIcon },
  { id: "videos", label: "Videos", icon: Film }
] as const;

export function GalleryTabs({ activeTab, onTabChange }: GalleryTabsProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-gray-100 rounded-lg p-1">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as MediaType)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200",
                activeTab === tab.id
                  ? "bg-white shadow-md text-red-600"
                  : "hover:bg-white/50 text-gray-600"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}