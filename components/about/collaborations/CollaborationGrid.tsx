"use client";

import { motion } from "framer-motion";
import { CollaborationCard } from "./CollaborationCard";


const COLLABORATIONS = [
  {
    name: "IIT Kanpur",
    type: "Research",
    description: "Kalyanpur, Kanpur, Uttar Pradesh 208016",
    image: "/patners/1.jpg"
  },
  {
    name: "IIT Hyderabad",
    type: "Research",
    description: "Kandi, Sangareddy - 502 285' Telangana",
    image: "/patners/2.jpg"
  },
  {
    name: "IIIT Nagpur",
    type: "Research",
    description: "Nagpur BSNL - Regional Telecom Training Center (RTTC), Near TV Tower or beside Balaji temple Seminary Hills, Nagpur - 440006, Maharashtra",
    image: "/patners/3.jpg"
  },
  {
    name: "Amity University",
    type: "Research",
    description: "Amity University Noida Campus Sector-125, Noida - 201313 (U.P.)",
    image: "/patners/4.jpg"
  },
  {
    name: "Technorbital Advance Materials Pvt. Ltd.",
    type: "Industry",
    description: "1/1-D, Nawabganj Kanpur-208025, Uttar Pradesh",
    image: "/patners/5.jpg"
  },
  {
    name: "Bai Labs",
    type: "Lab",
    description: "NL - 115, Northern Laboratory, Manufacturing Science Laboratory Indian Institute of Technology Kanpur U.P. 208016",
    image: "/patners/6.jpg"
  },
  {
    name: "Indeema Fibres Pvt. Ltd.",
    type: "Industry",
    description: "A, 1201, SHIVALIK MITTALS ATTALIKA, ARAZI NO 658, SINGHPUR KACHHAR, Kanpur Nagar, Uttar Pradesh, 208017",
    image: "/patners/7.jpg"
  },
  {
    name: "Russia, Promenergolab LLC",
    type: "Industry",
    description: "Russia Moscow -105318 Tkackaya Str.1",
    image: "/patners/8.jpg"
  },
  {
    name: "NINANO Inc.",
    type: "Industry",
    description: "347 Sanoegangbyeon-Ro, Sanoe-Myeon, Miryang-Si, Gyeongsangnam-Do, 50411",
    image: "/patners/9.jpg"
  },
  {
    name: "Egypt, NANOFIBTECH LLC",
    type: "Industry",
    description: "Building No.4 - 151 St El Maadi Cairo",
    image: "/patners/10.jpg"
  },
] as const;

export function CollaborationGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {COLLABORATIONS.map((collab, index) => (
          <CollaborationCard
            key={collab.name}
            {...collab}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}