"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { useRouter } from "next/navigation";
import { SUBCATEGORIES } from "@/lib/constants/products";
import { NavigationButtons } from "./NavigationButtons";

interface CategoryClientProps {
  category: string;
}

export function CategoryClient({ category }: CategoryClientProps) {
  const router = useRouter();
  const subcategories = SUBCATEGORIES[category as keyof typeof SUBCATEGORIES] || [];

  return (
    <main className="min-h-screen pt-20">
      <div className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/electro spinning.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {category.charAt(0).toUpperCase() + category.slice(1)} Products
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subcategories.map((subcat, index) => (
            <div 
              key={subcat.id} 
              onClick={() => router.push(`/products/${category}/${subcat.id}`)}
              className="cursor-pointer"
            >
              <ProductCard
                {...subcat}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      <NavigationButtons showNext={false} />
    </main>
  );
}









// "use client";

// import { motion } from "framer-motion";
// import { ProductCard } from "@/components/products/ProductCard";
// import { useRouter } from "next/navigation";
// import { SUBCATEGORIES } from "@/lib/constants/products";
// import { NavigationButtons } from "./NavigationButtons";

// interface CategoryClientProps {
//   category: string;
// }

// export function CategoryClient({ category }: CategoryClientProps) {
//   const router = useRouter();
//   const subcategories = SUBCATEGORIES[category as keyof typeof SUBCATEGORIES] || [];

//   return (
//     <main className="min-h-screen  pt-20">
//       <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
//         {/* Video Background */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src="/videos/electro spinning.mp4" type="video/mp4" />
//         </video>

//         <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900 to-black" />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-4"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             {category.charAt(0).toUpperCase() + category.slice(1)} Products
//           </h1>
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {subcategories.map((subcat, index) => (
//             <div 
//               key={subcat.id} 
//               onClick={() => router.push(`/products/${category}/${subcat.id}`)}
//               className="cursor-pointer"
//             >
//               <ProductCard
//                 {...subcat}
//                 index={index}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <NavigationButtons showNext={false} />
//     </main>
//   );
// }