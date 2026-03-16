"use client";

import { motion } from "framer-motion";
import { CollaborationHero } from "@/components/about/collaborations/CollaborationHero";
import { CollaborationGrid } from "@/components/about/collaborations/CollaborationGrid";

export default function CollaborationsPage() {
  return (
    <main className="min-h-screen pt-20">
      <CollaborationHero />
      <CollaborationGrid />
    </main>
  );
}