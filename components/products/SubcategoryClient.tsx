"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS } from "@/lib/constants/products";
import { MEMBRANE_PRODUCTS } from "@/lib/constants/membrane-products";
import { MembraneDetailClient } from "./MembraneDetailClient";
import { NavigationButtons } from "./NavigationButtons";
import { useRouter } from "next/navigation";

interface SubcategoryClientProps {
  subcategory: string;
}

export function SubcategoryClient({ subcategory }: SubcategoryClientProps) {
  const router = useRouter();
  const membraneProduct = MEMBRANE_PRODUCTS[subcategory];

  if (membraneProduct) {
    return <MembraneDetailClient productPage={membraneProduct} />;
  }

  const products = PRODUCTS[subcategory as keyof typeof PRODUCTS] || [];

  const handleProductClick = (productId: string) => {
    router.push(`/products/electrospinning/${subcategory}/${productId}`);
  };

  return (
    <main className="min-h-screen pt-20">
      <div className="relative h-[20vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/product.mp4" type="video/mp4" />
        </video>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} Products
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="cursor-pointer"
            >
              <ProductCard
                {...product}
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
// import { PRODUCTS } from "@/lib/constants/products";
// import { NavigationButtons } from "./NavigationButtons";
// import { useRouter } from "next/navigation";

// interface SubcategoryClientProps {
//   subcategory: string;
// }

// export function SubcategoryClient({ subcategory }: SubcategoryClientProps) {
//   const router = useRouter();
//   const products = PRODUCTS[subcategory as keyof typeof PRODUCTS] || [];

//   const handleProductClick = (productId: string) => {
//     router.push(`/products/electrospinning/${subcategory}/${productId}`);
//   };

//   return (
//     <main className="min-h-screen  pt-20">
//       <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900 to-black" />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-4"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} Products
//           </h1>
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {products.map((product, index) => (
//             <div 
//               key={product.id}
//               onClick={() => handleProductClick(product.id)}
//               className="cursor-pointer"
//             >
//               <ProductCard
//                 {...product}
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