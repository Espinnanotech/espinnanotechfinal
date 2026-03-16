"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { BackgroundBeams } from "./ui/background-beams";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="min-h-[15vh] relative w-full overflow-hidden bg-kesari flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-kesari z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* <Boxes /> */}
      <BackgroundBeams />
      <h1
        className={cn(
          "md:text-6xl text-xl text-white font-bold  relative z-20"
        )}
      >
        The values that make us up
      </h1>
      {/* <hr className="min-w-[30rem]  border-2 border-red-700 mx-auto mb-6 rounded-full" /> */}
      {/* <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p> */}
    </div>
  );
}
