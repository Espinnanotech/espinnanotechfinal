"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className=" py-10 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Our{" "}
          <span className="text-black">
            {"Overseas ~ Customers".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
        Partnering with The Organizations of Today to Develop the Technologies of Tomorrow
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 26.4499,
              lng: 80.3319,
            }, // UP kanpur
            end: {
              lat: 56.2639,
              lng: 9.5018,
            }, // Denmark
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // UP kanpur
            end: { lat: 31.0461, lng: 34.8516 }, // israel
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // kanpur UP
            end: { lat: 35.0078, lng: 97.0929 }, // Oklahoma
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // UP kanpur
            end: { lat: 60.1282, lng: 18.6435 }, // sweden
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // kanpur UP
            end: { lat: 23.8859, lng: 45.0792 }, // saudi Arabia 
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // Kanpur UP
            end: { lat: 26.8206, lng: 30.8025 }, // Egypt
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // Kanpur UP
            end: { lat: 40.4637, lng: 3.7492 }, // Valencia
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // Kanpur UP
            end: { lat: 41.4925, lng: 99.9018 }, // Nebraska
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // Kanpur UP
            end: { lat: 46.2276, lng: 2.2137 }, // France
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // Kanpur UP
            end: { lat: 56.1304, lng: -106.3468 }, // canada
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // Kanpur UP
            end: { lat: 23.6850, lng: 90.3563 }, // Bangladesh
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // Kanpur UP
            end: { lat: 38.7946, lng: -106.5348 }, // United States
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // Kanpur UP
            end: { lat: 28.3949, lng: 84.1240 }, // Napal
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // Kanpur UP
            end: { lat: -30.5595, lng: 22.9375 }, // South Africa
          },
          {
            start: { lat: 26.4499, lng: 80.3319 }, // Kanpur UP
            end: { lat: 61.5240, lng: 105.3188 }, // Russia
          },
        ]}
      />
    </div>
  );
}
