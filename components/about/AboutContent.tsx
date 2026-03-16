"use client";

import { motion } from "framer-motion";

export function AboutContent() {
  return (
    <div className="max-w-7xl mx-auto px-2 py-16 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white  p-8 md:p-8 space-y-8  font-normal"    // you can add border here if you need
      >
        <div className="space-y-8">
          <p className="text-lg  ">
            E-Spin Nanotech Pvt Ltd, a spin off of IIT Kanpur, was founded in 2010 with an aim to tap on the immense potential of nanotechnology for commercial applications & societal benefits. Spearheaded by a team of nanotechnology experts and researchers, we are now established as a global leader in the field of nanofiber membrane technology with advanced manufacturing facilities.
          </p>

          <p className="text-lg  ">
            We believe nanotechnology will drive significant contributions in the field of air and liquid filter innovations. To work on those innovations our scientists work relentlessly at/in our DSIR recognized R&D facilities. We have different teams of scientists, engineers and internal resources – including design verification centers, prototype capabilities, state-of-the-art laboratories and an advanced manufacturing technology group to help develop innovative solutions that anticipate and exceed the world&apos;s ever-evolving filtration requirements.
          </p>

          <p className="text-lg  ">
            We have effectively established a significant foothold in the Indian and Global Nanotech Industry owing to our superior technical expertise, cutting-edge equipment, state-of-the-art infrastructure and exceptional client service.
          </p>
        </div>
      </motion.div>
    </div>
  );
}