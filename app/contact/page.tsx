"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";
import { IndiaOffices } from "@/components/contact/IndiaOffices";
import { OverseasPartners } from "@/components/contact/OverseasPartners";
import { WorldMapDemo } from "@/components/contact/WorldMapDemo";
import { ContactButton } from "@/components/contact/ContactButton";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="relative h-[20vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #000000 0%, #dc2626 50%, #7f1d1d 100%)'
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or support
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
        </motion.div>
      </div>

      <div className="min-w-full mx-auto px-4 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-8xl mx-auto flex flex-col items-center mb-4"
        >
          
          <ContactButton />
          <WorldMapDemo />
          
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <IndiaOffices />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <OverseasPartners />
        </motion.div> */}
        {/* <ContactForm /> */}
        
      </div>
    </main>
  );
}