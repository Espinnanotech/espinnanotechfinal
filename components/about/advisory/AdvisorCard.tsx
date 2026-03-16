"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AdvisorCardProps {
  name: string;
  position: string;
  image: string;
  index: number;
  link: string;
}

export function AdvisorCard({
  name,
  position,
  image,
  index,
  link,
}: AdvisorCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      >
        <div className="relative h-64 w-full">
          <Image src={image} alt={name} fill className="object-contain" />
        </div>
        <div className="p-6 flex justify-center items-center flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm text-wrap">{position}</p>
        </div>
      </motion.div>
    </Link>
  );
}



// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// interface AdvisorCardProps {
//   name: string;
//   position: string;
//   image: string;
//   index: number;
//   link: string;
// }

// export function AdvisorCard({
//   name,
//   position,
//   image,
//   index,
//   link,
// }: AdvisorCardProps) {
//   return (
//     <Link href={link} passHref>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: index * 0.1 }}
//         className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
//       >
//         <div className="relative h-64 w-full">
//           <Image src={image} alt={name} fill className="object-contain" />
//         </div>
//         <div className="p-6 flex justify-center items-center flex-col">
//           <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
//           <p className="text-gray-600 text-sm text-wrap ">{position}</p>
//         </div>
//       </motion.div>
//     </Link>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// interface AdvisorCardProps {
//   name: string;
//   position: string;
//   image: string;
//   index: number;
// }

// export function AdvisorCard({ name, position, image, index }: AdvisorCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="bg-white rounded-2xl shadow-lg overflow-hidden"
//     >
//       <div className="relative h-64 w-full">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-contain"
//         />
//       </div>
//       <div className="p-6 flex justify-center items-center flex-col">
//         <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
//         <p className="text-gray-600 text-sm">{position}</p>
//       </div>
//     </motion.div>
//   );
// }
