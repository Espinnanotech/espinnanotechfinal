"use client";

import { motion } from "framer-motion";
import { AdvisorCard } from "@/components/about/advisory/AdvisorCard";
import { link } from "node:fs";

const ADVISORS = [
  {
    name: "Dr. Ashutosh Sharma",
    position:
      "Ashutosh Sharma (born 22 August 1961) is an Institute Chair Professor and C V Seshadri Chair Professor at the Department of chemical engineering of Indian Institute of Technology Kanpur. He is the founding Coordinator of DST Thematic Unit of Excellence on Soft Nanofabrication and Chairman of Centre for Environmental Science and Engineering at IIT Kanpur. He is best known for his pioneering research work in the areas of colloids, thin film, interfaces, adhesion, patterning and in the fabrication and application of self-assembled nano-structures.",
    image: "/advisory/Ashutosh Sharma.png",
    link: "https://en.wikipedia.org/wiki/Ashutosh_Sharma_(chemical_engineer)"
  },
  {
    name: "Dr. Ashok Misra",
    position:
      "Ex-Director, Prof. Ashok Misra, former Director of IIT Bombay, has been honoured with the prestigious PPS Fellows Award for 2024 by the Polymer Processing Society (PPS). This award recognizes his exceptional contributions to polymer science and engineering, as well as his distinguished career spanning over four decades as an engineer, scientist, and educator. As Director of IIT Bombay, Prof. Misra played a crucial role in elevating the Institute’s status as a premier R&D hub while maintaining its excellence in engineering education.",
    image: "/advisory/mishra.jpg",
    link: "https://acr.iitbombay.org/former-iit-bombay-director-prof-ashok-misra-honoured-with-pps-fellows-award-2024/"
  },
  {
    name: "Prof. Chandrashekhar Sharma",
    position: "Dean of R&D, IIT Hyderabad",
    image: "/advisory/Chandra_Shekhar_Sharma.jpeg",
    link: "https://www.iith.ac.in/che/cssharma/"
  },
  {
    name: "Prof. Dipankar Bandyopadhyay",
    position: "Professor in Department of Chemical Engineering, IIT Guwahati",
    image: "/advisory/Bandyopadhyay.jpeg",
    link: "https://www.iitg.ac.in/chemeng/faculty_profile.php?name=db"
  },
  {
    name: "Dr. Abhijit Majumder",
    position:
      "Associate Professor in the Department of Chemical Engineering, IIT Bombay",
    image: "/advisory/Abhijit_Majumder.jpeg",
    link: "https://www.che.iitb.ac.in/faculty/abhijit-majumder"
  },
  {
    name: "Dr. Akhilesh Kumar Sahu",
    position: "Assistant Professor in Chemical Engineering, NIT Rourkela",
    image: "/advisory/Akhilesh_Sahu.jpeg",
    link: "https://www.nitrkl.ac.in/FacultyStaff/FacultyProfile/sahuak"
  },
  {
    name: "Dr. Gaurav Sharma",
    position:
      "Associate Professor in Department of Chemical Engineering, IIT Roorkee",
    image: "/advisory/Gaurav_sharma.jpeg",
    link: "https://www.iitr.ac.in/~CH/goravfch"
  },
  {
    name: "Dr. Ankur Verma",
    position:
      "Associate Professor in Department of Chemical Engineering & Technology, IIT BHU",
    image: "/advisory/Verma.jpeg",
    link: "https://iitbhu.ac.in/dept/che/people/ankurvche"
  },
  {
    name: "Dr. HyeonSeok Oh",
    position: "Director at Ninano Inc., South Korea",
    image: "/advisory/Dr_Oh.jpg",
    link: "https://directory.engr.wisc.edu/mse/Faculty/Oh_Hyunseok/"
  },
  {
    name: "Dr. Mudrika",
    position:
      "Associate Professor in the Department of Materials Science and Metallurgical Engineering, IIT Hyderabad",
    image: "/advisory/mudrika.jpeg",
    link: "https://www.iith.ac.in/msme/mudrika/"
  },
] as const;

export default function AdvisoryPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="relative h-[25vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 flex justify-center items-center"
          style={{
            background:
              "linear-gradient(135deg, #000000 0%, #dc2626 50%, #7f1d1d 100%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Scientific Advisory Committee
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Distinguished experts guiding our research and development
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 "
        >
          {ADVISORS.map((advisor, index) => (
            <AdvisorCard key={advisor.name} {...advisor} index={index} />
          ))}
        </motion.div>
      </div>
    </main>
  );
}

// export default function AdvisoryPage() {
//   return (
//     <main className="min-h-screen pt-20">
//       <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 flex justify-center items-center"
//           style={{
//             background: 'linear-gradient(135deg, #000000 0%, #dc2626 50%, #7f1d1d 100%)'
//           }}
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-4"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Scientific Advisory Committee
//           </h1>
//           <p className="text-lg text-gray-200 max-w-2xl mx-auto">
//             Distinguished experts guiding our research and development
//           </p>
//           <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 "
//         >
//           {ADVISORS.map((advisor, index) => (
//             <AdvisorCard
//               key={advisor.name}
//               {...advisor}
//               index={index}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </main>
//   );
// }
