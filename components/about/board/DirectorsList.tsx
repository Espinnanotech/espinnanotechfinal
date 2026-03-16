"use client";

import { motion } from "framer-motion";
import { DirectorCard } from "./DirectorCard";

const DIRECTORS = [
  {
    name: "Dr. Sandip Patil",
    position: "FOUNDER/DIRECTOR",
    description:
      "Dr. Sandip Patil is the Founder and Director of E-Spin Nanotech Pvt. Ltd. and holds a Ph.D. in Chemical Engineering from Indian Institute of Technology Kanpur. With over a decade of expertise in nanofiber membrane technology, electrospinning systems, polymer science, and advanced filtration research, he has been instrumental in establishing the company as a recognized name in nanofiber fabrication and research-driven engineering.His academic foundation and technology development experience reflect a strong commitment to advancing scalable nanotechnology solutions and high-performance membrane systems.",
    image: "/image/sandip patil.png",
  },
  {
    name: "Mrs. Jagruti Patil",
    position: "DIRECTOR",
    description:
      "Mrs. Jagruti Patil holds a Master of Computer Management (MCM) and contributes strong organizational and strategic capabilities to E-Spin Nanotech Pvt. Ltd. With a background in systems management and analytical planning, she supports structured coordination, operational alignment, and institutional development initiatives. Her strengths in communication, planning, and leadership support reinforce the company’s governance framework and sustainable growth strategy.",
    image: "/image/JagrutiMa'am Pic.jpeg",
  },
  {
    name: "Dr. Sunil Dhole",
    position: "DIRECTOR",
    description:
      "Dr. Sunil Dhole holds a Ph.D. in Chemical Engineering from Indian Institute of Technology Kanpur, with specialization in advanced materials, polymer rheology, membrane science, and process engineering. His academic background includes post-doctoral research in Europe, strengthening his expertise in material behavior and fluid mechanics.He brings strong technical insight and domain knowledge in electrospinning technology, membrane engineering, and advanced material systems to the Board.",
    image: "/image/Sunil Dhole1.png",
  },
] as const;

export function DirectorsList() {
  return (
    <div className="flex flex-col gap-20 py-10">
      {DIRECTORS.map((director, index) => (
        <DirectorCard
          key={director.name + index}
          {...director} // ✅ now includes description automatically
          index={index}
          isRight={index % 2 === 1} // alternate left/right automatically
        />
      ))}
    </div>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { DirectorCard } from "./DirectorCard";

// const DIRECTORS = [
//   {
//     name: "Dr. Sandip Patil",
//     position: "FOUNDER/DIRECTOR",
//     image: "/image/sandip patil.png",
//   },
//   {
//     name: "Mrs. Jagruti Patil",
//     position: "DIRECTOR",
//     image: "/image/JagrutiMa'am Pic.jpeg",
//   },
//   {
//     name: "Dr. Sunil Dhole",
//     position: "DIRECTOR",
//     image: "/image/Sunil Dhole1.png",
//   }
// ] as const;

// export function DirectorsList() {
//   return (
//     <div className="flex flex-col gap-20 py-10">
//       {DIRECTORS.map((director, index) => (
//         <DirectorCard
//           key={director.name + index}
//           {...director}
//           index={index}
//           isRight={index === 1}
//         />
//       ))}
//     </div>
//   );
// }











// "use client";

// import { motion } from "framer-motion";
// import { DirectorCard } from "./DirectorCard";

// const DIRECTORS = [
//   {
//     name: "Dr. Sandip Patil",
//     position: "FOUNDER/DIRECTOR",
//     description: " ",
//     image: "/image/sandip patil.png",
//     linkedin: "https://www.linkedin.com/in/dr-sandip-patil-87863814/",
//     email: "ashok.kumar@espinnanotech.com"
//   },
//   {
//     name: "Mrs. Jagruti Patil",
//     position: "DIRECTOR",
//     description: " ",
//     image: "/image/JagrutiMa'am Pic.jpeg",
//     linkedin: "https://linkedin.com",
//     email: "priya.singh@espinnanotech.com"
//   },
//   {
//     name: "Dr. Sunil Dhole",
//     position: "DIRECTOR",
//     description: "",
//     image: "/image/Sunil Dhole1.png",
//     linkedin: "https://www.linkedin.com/in/sunil-dhole-1521b021/",
//     email: "rajesh.patel@espinnanotech.com"
//   }
// ] as const;

// export function DirectorsList() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//       {DIRECTORS.map((director, index) => (
//         <DirectorCard
//           key={director.name}
//           {...director}
//           index={index}
//         />
//       ))}
//     </div>
//   );
// }












// "use client";

// import { motion } from "framer-motion";
// import { DirectorCard } from "./DirectorCard";

// const DIRECTORS = [
//   {
//     name: "Dr. Sandip Patil",
//     position: "FOUNDER/DIRECTOR",
//     description: " ",
//     image: "/image/sandip patil.png",
//     linkedin: "https://www.linkedin.com/in/dr-sandip-patil-87863814/",
//     email: "ashok.kumar@espinnanotech.com"
//   },
//   {
//     name: "Mrs. Jagruti Patil",
//     position: "DIRECTOR",
//     description: " ",
//     image: "/image/JagrutiMa'am Pic.jpeg",
//     linkedin: "https://linkedin.com",
//     email: "priya.singh@espinnanotech.com"
//   },
//   {
//     name: "Dr. Sunil Dhole",
//     position: "DIRECTOR",
//     description: " ",
//     image: "/image/Sunil Dhole1.png",
//     linkedin: "https://www.linkedin.com/in/sunil-dhole-1521b021/",
//     email: "rajesh.patel@espinnanotech.com"
//   }
// ] as const;

// export function DirectorsList() {
//   return (
//     <div className="space-y-8">
//       {DIRECTORS.map((director, index) => (
//         <DirectorCard
//           key={director.name}
//           {...director}
//           index={index}
//         />
//       ))}
//     </div>
//   );
// }