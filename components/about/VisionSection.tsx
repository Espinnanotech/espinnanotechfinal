import React from "react";
import { Cover } from "@/components/ui/cover";

export function VisionSection() {
  return (
    <div className="text-center max-w-7xl mx-auto mb-12">
      {/* Title "Mission" */}
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Vision
      </h1>

      {/* Red Horizontal Line */}
      <hr className="  border-red-500 mx-auto mb-6" />

      {/* Mission Statement */}
      <h2 className="text-4xl md:text-4xl lg:text-4xl font-semibold relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-black via-black to-neutral-700 dark:from-black dark:via-white dark:to-white">
        Strive to be
        <span className="text-red-500"> Market Leaders </span>
        in
        <span className="text-red-500"> Providing </span>
        <span className="text-red-500"> One Stop </span> <br />
        <span className="text-5xl shadow-lg font-bold ">Nano Technology</span> Solutions
      </h2>
    </div>
  );
}

// Vision- Strive to be market leaders in providing ONE STOP NANOTECHNOLOGY solutions
