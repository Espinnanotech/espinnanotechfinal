"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GetStartedForm } from "./GetStartedForm";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <footer className="bg-black text-white px-4 md:px-6 py-14 relative">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">E-SPIN NANOTECH</h2>
          <p className="text-gray-400 text-sm mb-4">
            We develop advanced nanofiber technology solutions including air
            filtration membranes and electrospinning systems for research and
            industrial applications.
          </p>

          <div className="space-y-2 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Kanpur, Uttar Pradesh, India
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> contact@espinnanotech.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </p>
          </div>
        </div>


        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important Pages</h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">About Us</a>
            </li>
            <li>
              <a href="/products" className="hover:text-white transition">Products</a>
            </li>
            <li>
              <a href="/research" className="hover:text-white transition">Research</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>


        {/* CTA + Social */}
        <div className="flex flex-col items-start md:items-end gap-6">

          <button 
            onClick={() => setIsFormOpen(true)}
            className="px-4 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-lg font-semibold"
          >
            Get Started Today
          </button>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-red-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Instagram size={20} />
            </a>
          </div>

        </div>
      </div>


      {/* Bottom copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} E-SPIN NANOTECH. All rights reserved.
      </div>


      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl">
          <GetStartedForm />
        </DialogContent>
      </Dialog>

    </footer>
  );
}








// "use client";

// import { useState } from "react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { GetStartedForm } from "./GetStartedForm";
// import { BackgroundLines } from "@/components/ui/background-lines";

// export function Footer() {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   return (
//     <footer className="bg-black text-white min-h-[20vh] px-4 md:px-6 py-12 relative">
//       <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
//       {/* <BackgroundLines className="flex justify-center items-center "> */}
//         <button 
//           onClick={() => setIsFormOpen(true)}
//           className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-lg font-semibold"
//         >
//           Get Started Today
//         </button>
//         {/* </BackgroundLines> */}
//         <p className="text-gray-400 text-sm absolute bottom-4">
//           © {new Date().getFullYear()} E-SPIN NANOTECH. All rights reserved. | 2025 
//         </p>
//       </div>

//       <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
//         <DialogContent className="max-w-2xl">
//           <GetStartedForm />
//         </DialogContent>
//       </Dialog>
//     </footer>
//   );
// }








// "use client";
// import React from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";
// export function Footer() {
//   return (
//     <footer className="bg-neutral-800 text-white min-h-[10vh] px-4 md:px-6 py-12 relative">
      
//       <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
//       <BackgroundLines className="flex justify-center items-center ">
      
//         <button className="px-8 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors text-lg font-semibold">
//           Get Started Today
//         </button>
//         </BackgroundLines>
//         <p className="text-gray-400 text-sm absolute bottom-4">
//           © {new Date().getFullYear()} E-SPIN NANOTECH Pvt. Ltd. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }