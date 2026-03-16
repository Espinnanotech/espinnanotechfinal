"use client";

import { motion } from "framer-motion";
import { GalleryGrid } from "@/components/media/gallery/GalleryGrid";
import { GalleryHero } from "@/components/media/gallery/GalleryHero";
import { GalleryTabs } from "@/components/media/gallery/GalleryTabs";
import { useState } from "react";

export type MediaType = "all" | "photos" | "videos";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<MediaType>("all");

  return (
    <main className="min-h-screen pt-20">
      <GalleryHero />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <GalleryTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <GalleryGrid activeTab={activeTab} />
      </div>
    </main>
  );
}