"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LinkedinIcon, MailIcon } from "lucide-react";

interface DirectorCardProps {
  name: string;
  position: string;
  description: string;
  image: string;
  index: number;
  isRight?: boolean;
}

export function DirectorCard({
  name,
  position,
  description,
  image,
  index,
  isRight = false,
}: DirectorCardProps) {
  const ImageBlock = (
    <motion.div
      className="group relative w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex-shrink-0"
      whileHover={{ scale: 1.02 }}
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="192px"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-start gap-16 ${
        isRight ? "justify-end" : "justify-start"
      }`}
    >
      {/* LEFT IMAGE */}
      {!isRight && ImageBlock}

      {/* TEXT CARD */}
      <motion.div
        className={`relative max-w-5xl ${
          isRight ? "text-right pr-8" : "pl-8"
        }`}
        whileHover={{ x: isRight ? -5 : 5 }}
      >
        {/* vertical line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-600 via-red-800 to-black/50 rounded-full"
          style={{
            left: isRight ? "auto" : 0,
            right: isRight ? 0 : "auto",
          }}
        />

        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] space-y-4">
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-1">
              {name}
            </h3>
            <p className="text-red-600 text-lg font-medium">
              {position}
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>

          <div
            className={`flex gap-4 ${
              isRight ? "justify-end" : "justify-start"
            }`}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5 text-gray-700" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <MailIcon className="w-5 h-5 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      {isRight && ImageBlock}
    </motion.div>
  );
}




// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { LinkedinIcon, GlobeIcon, MailIcon } from "lucide-react";

// interface DirectorCardProps {
//   name: string;
//   position: string;
//   description: string; // ✅ added description prop
//   image: string;
//   index: number;
//   isRight?: boolean;
// }

// export function DirectorCard({
//   name,
//   position,
//   description, // ✅ receive description
//   image,
//   index,
//   isRight = false,
// }: DirectorCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className={`flex items-stretch gap-16 ${isRight ? "justify-end" : "justify-start"}`}
//     >
//       {!isRight && (
//         <motion.div
//           className="group relative w-48 min-h-[260px] h-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
//           whileHover={{ scale: 1.02 }}
//         >
//           <Image
//             src={image}
//             alt={name}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </motion.div>
//       )}

//       <motion.div
//         className={`relative ${isRight ? "text-right pr-8" : "pl-8"}`}
//         whileHover={{ x: isRight ? -5 : 5 }}
//       >
//         <div
//           className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-600 via-red-800 to-black/50 rounded-full"
//           style={{
//             left: isRight ? "auto" : 0,
//             right: isRight ? 0 : "auto",
//           }}
//         />

//         <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] space-y-4">
//           <div>
//             <h3 className="text-3xl font-semibold text-gray-900 mb-1">
//               {name}
//             </h3>
//             <p className="text-red-600 text-lg font-medium">{position}</p>
//           </div>

//           {/* ✅ dynamic description */}
//           <p className="text-gray-600 leading-relaxed">{description}</p>

//           <div
//             className={`flex gap-4 ${
//               isRight ? "justify-end" : "justify-start"
//             }`}
//           >
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//             >
//               <LinkedinIcon className="w-5 h-5 text-gray-700" />
//             </motion.button>

//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//             >
//               <MailIcon className="w-5 h-5 text-gray-700" />
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>

//       {isRight && (
//         <motion.div
//           className="group relative w-48 h-64 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
//           whileHover={{ scale: 1.02 }}
//         >
//           <Image
//             src={image}
//             alt={name}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </motion.div>
//       )}
//     </motion.div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { LinkedinIcon, GlobeIcon, MailIcon } from "lucide-react";

// interface DirectorCardProps {
//   name: string;
//   position: string;
//   image: string;
//   index: number;
//   isRight?: boolean;
// }

// export function DirectorCard({
//   name,
//   position,
//   image,
//   index,
//   isRight = false
// }: DirectorCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className={`flex items-center gap-16 ${isRight ? 'justify-end' : 'justify-start'}`}
//     >
//       {!isRight && (
//         <motion.div
//           className="group relative w-48 h-64 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
//           whileHover={{ scale: 1.02 }}
//         >
//           <Image
//             src={image}
//             alt={name}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </motion.div>
//       )}
//       <motion.div
//         className={`relative ${isRight ? 'text-right pr-8' : 'pl-8'}`}
//         whileHover={{ x: isRight ? -5 : 5 }}
//       >
//         <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-600 via-red-800 to-black/50 rounded-full"
//           style={{
//             left: isRight ? 'auto' : 0,
//             right: isRight ? 0 : 'auto'
//           }}
//         />
//         <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] space-y-4">
//           <div>
//             <h3 className="text-3xl font-semibold text-gray-900 mb-1">{name}</h3>
//             <p className="text-red-600 text-lg font-medium">{position}</p>
//           </div>

//           <p className="text-gray-600 leading-relaxed">
//             Leading innovation in nanofiber technology and driving strategic growth through research and development.
//           </p>

//           <div className={`flex gap-4 ${isRight ? 'justify-end' : 'justify-start'}`}>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//             >
//               <LinkedinIcon className="w-5 h-5 text-gray-700" />
//             </motion.button>
//             {/* <motion.button
//               whileHover={{ scale: 1.1 }}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//             >
//               <GlobeIcon className="w-5 h-5 text-gray-700" />
//             </motion.button> */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//             >
//               <MailIcon className="w-5 h-5 text-gray-700" />
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//       {isRight && (
//         <motion.div
//           className="group relative w-48 h-64 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
//           whileHover={{ scale: 1.02 }}
//         >
//           <Image
//             src={image}
//             alt={name}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//         </motion.div>
//       )}
//     </motion.div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Linkedin, Mail } from "lucide-react";

// interface DirectorCardProps {
//   name: string;
//   position: string;
//   description: string;
//   image: string;
//   linkedin?: string;
//   email?: string;
//   index: number;
// }

// export function DirectorCard({
//   name,
//   position,
//   description,
//   image,
//   linkedin,
//   email,
//   index
// }: DirectorCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="group bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
//     >
//       <div className="relative h-64 overflow-hidden">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-fill transition-transform duration-500 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 " />
//         {/* bg-gradient-to-t from-black via-black/20 to-transparent */}
//       </div>

//       <div className="p-6 text-black">
//         <h3 className="text-2xl font-bold mb-1">{name}</h3>
//         <p className="text-red-500 font-medium mb-4">{position}</p>
//         <p className="text-gray-400 text-sm mb-6 line-clamp-3">{description}</p>

//         <div className="flex gap-4">
//           {linkedin && (
//             <a
//               href={linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-black hover:text-red-500 transition-colors"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>
//           )}
//           {email && (
//             <a
//               href={`mailto:${email}`}
//               className="text-black hover:text-red-500 transition-colors"
//             >
//               <Mail className="h-5 w-5" />
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Linkedin, Mail } from "lucide-react";

// interface DirectorCardProps {
//   name: string;
//   position: string;
//   description: string;
//   image: string;
//   linkedin?: string;
//   email?: string;
//   index: number;
// }

// export function DirectorCard({
//   name,
//   position,
//   description,
//   image,
//   linkedin,
//   email,
//   index
// }: DirectorCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
//     >
//       <div className="relative w-full md:w-48 h-64 md:h-48 rounded-lg overflow-hidden shrink-0">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover"
//         />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
//         <p className="text-red-600 font-medium mb-4">{position}</p>
//         <p className="text-gray-600 mb-4">{description}</p>
//         <div className="flex gap-4">
//           {linkedin && (
//             <a
//               href={linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-red-600 transition-colors"
//             >
//               <Linkedin className="h-5 w-5" />
//             </a>
//           )}
//           {email && (
//             <a
//               href={`mailto:${email}`}
//               className="text-gray-600 hover:text-red-600 transition-colors"
//             >
//               <Mail className="h-5 w-5" />
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }
