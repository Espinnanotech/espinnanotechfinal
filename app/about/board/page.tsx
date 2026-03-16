"use client";

import { motion } from "framer-motion";
import { DirectorsList } from "@/components/about/board/DirectorsList";

export default function BoardPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="relative h-[25vh] flex items-center justify-center overflow-hidden mb-4">
        <div
          className="absolute inset-0"
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
          <h1 className="text-5xl md:text-5xl font-bold text-white mb-4">
            Board of Directors
          </h1>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto">
            The leadership of E-Spin Nanotech Pvt. Ltd. brings together deep
            expertise in nanofiber technology, electrospinning systems, advanced
            materials, and strategic management, guiding the companyU+2019s long-term
            growth and strengthening its position in scientific research
            infrastructure and advanced filtration technologies.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-2"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <DirectorsList />
      </div>
    </main>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { DirectorsList } from "@/components/about/board/DirectorsList";

// export default function BoardPage() {
//   return (
//     <main className="min-h-screen pt-20">
//       <div className="relative h-[20vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0"
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
//             Board of Directors
//           </h1>
//           <p className="text-lg text-gray-200 max-w-2xl mx-auto">
//             Meet our experienced leadership team driving innovation in nanofiber technology
//           </p>
//           <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <DirectorsList />
//       </div>
//     </main>
//   );
// }

// // "use client";

// // import { motion } from "framer-motion";
// // import { DirectorsList } from "@/components/about/board/DirectorsList";

// // export default function BoardPage() {
// //   return (
// //     <main className="min-h-screen pt-20">
// //       <div className="relative h-[20vh] flex items-center justify-center overflow-hidden">
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             background: 'linear-gradient(135deg, #000000 0%, #dc2626 50%, #7f1d1d 100%)'
// //           }}
// //         />
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="relative z-10 text-center px-4"
// //         >
// //           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
// //             Board of Directors
// //           </h1>
// //           <p className="text-lg text-gray-200 max-w-2xl mx-auto">
// //             Meet our experienced leadership team driving innovation in nanofiber technology
// //           </p>
// //           <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-6"></div>
// //         </motion.div>
// //       </div>

// //       <div className="max-w-5xl mx-auto px-4 py-16">
// //         <DirectorsList />
// //       </div>
// //     </main>
// //   );
// // }
