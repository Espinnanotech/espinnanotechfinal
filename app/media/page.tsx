"use client";

import { MediaHero } from "@/components/media/MediaHero";
import { GalleryGrid } from "@/components/media/GalleryGrid";

export default function MediaPage() {
  return (
    <main className="min-h-screen pt-20">
      <MediaHero />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <GalleryGrid />
      </div>
    </main>
  );
}