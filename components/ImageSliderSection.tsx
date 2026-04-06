"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  { src: "/feature products/C Hollow Fiber Complete Assembly.140.png", alt: "Nanofiber Structure" },
  { src: "/feature products/blade coater 100X300mm.88.png", alt: "Electrospinning Process" },
  { src: "/feature products/Deep Coater machine.32.png", alt: "Nanofiber Laboratory" },
  { src: "/feature products/film coating machine.17.png", alt: "Innovation at E-Spin" },
  { src: "/feature products/FM coting.28.png", alt: "Advanced Research" },
  { src: "/feature products/High Pressure Reactor (3).png", alt: "Nanofiber Technology" },
  { src: "/feature products/hydrothermal Autoclave Reactor.52.png", alt: "Nanofiber Technology" },
  { src: "/feature products/membrane casting machine.43.png", alt: "Nanofiber Technology" },
  { src: "/feature products/near field.5.png", alt: "Nanofiber Technology" },
  { src: "/feature products/Strech9ing unit.72.png", alt: "Nanofiber Technology" },
  { src: "/feature products/streching Unit.45.png", alt: "Nanofiber Technology" },
  { src: "/feature products/Super es 4 new updated.125.png", alt: "Nanofiber Technology" },
  { src: "/feature products/untitled.73.png", alt: "Nanofiber Technology" },
  { src: "/feature products/untitled.84.png", alt: "Nanofiber Technology" },
];

export function ImageSliderSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-red-600">Innovation</span> in Action
          </h2>
          <p className="mt-3 text-gray-500 text-base md:text-lg">
            A glimpse into our state-of-the-art research and production facilities
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ height: "50vh" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={SLIDES[current].src}
                alt={SLIDES[current].alt}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-800 ${
                  i === current ? "bg-white w-6" : "bg-white/50 w-2"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
