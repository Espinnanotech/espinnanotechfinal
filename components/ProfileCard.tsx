"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const profiles = [
  {
    name: "Dr. Sandip Patil",
    imageSrc: "/image/director.jpeg",
    comment: "Great experience working with this team!",
  },
  {
    name: "Dr. Sunil Dhole",
    imageSrc: "/image/Sunil Dhole1.png",
    comment: "Amazing service and support!",
  },
  {
    name: "Mrs. Jagruti Patil",
    imageSrc: "/image/JagrutiMa'am Pic.jpeg",
    comment: "Would definitely recommend to others.",
  },
];

const ProfileCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 5000); // Slower transition
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center space-x-12 py-10 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      {[0, 1].map((offset) => (
        <motion.div
          key={offset}
          initial={{ opacity: 0, scale: 0.85, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, y: -40 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center p-8 bg-white rounded-2xl shadow-lg w-fit ${
            offset % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } gap-4`}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full overflow-hidden border-4 border-white flex-shrink-0"
          >
            <Image
              src={profiles[(currentIndex + offset) % profiles.length].imageSrc}
              alt={profiles[(currentIndex + offset) % profiles.length].name}
              width={96}
              height={96}
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="flex-grow"
          >
            <Card className="p-6 bg-white text-center min-w-[200px] rounded-lg shadow-md flex-grow">
              <p className="font-semibold text-xl text-gray-900">
                {profiles[(currentIndex + offset) % profiles.length].name}
              </p>
              <p className="text-md text-gray-700 mt-2">
                {profiles[(currentIndex + offset) % profiles.length].comment}
              </p>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProfileCards;

// 'use client';

// import { Card } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const profiles = [
//   {
//     name: "Dr. Sandip Patil",
//     imageSrc: "/image/director.jpeg",
//     comment: "Great experience working with this team!"
//   },
//   {
//     name: "Dr. Sunil Dhole",
//     imageSrc: "/image/Sunil Dhole1.png",
//     comment: "Amazing service and support!"
//   },
//   {
//     name: "Mrs. Jagruti Patil",
//     imageSrc: "/image/JagrutiMa'am Pic.jpeg",
//     comment: "Would definitely recommend to others."
//   }
// ];

// const ProfileCards = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % profiles.length);
//     }, 5000); // Slower transition
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex justify-center items-center space-x-12 py-10 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
//       {[0, 1].map((offset) => (
//         <motion.div
//           key={offset}
//           initial={{ opacity: 0, scale: 0.85, y: 60 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 1.1, y: -40 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//           className={`flex items-center p-8 bg-white rounded-2xl shadow-lg w-fit ${offset % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-4`}
//         >
//           <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white flex-shrink-0">
//             <Image
//               src={profiles[(currentIndex + offset) % profiles.length].imageSrc}
//               alt={profiles[(currentIndex + offset) % profiles.length].name}
//               width={96}
//               height={96}
//               className="object-cover"
//             />
//           </div>
//           <Card className="p-6 bg-white text-center min-w-[200px] rounded-lg shadow-md flex-grow">
//             <p className="font-semibold text-xl text-gray-900">{profiles[(currentIndex + offset) % profiles.length].name}</p>
//             <p className="text-md text-gray-700 mt-2">{profiles[(currentIndex + offset) % profiles.length].comment}</p>
//           </Card>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default ProfileCards;
