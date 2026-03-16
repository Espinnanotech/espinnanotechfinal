"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { useRouter } from "next/navigation";

const PRODUCT_CATEGORIES = [
  {
    id: "electrospinning",
    title: "Nanofiber Spinning Technology",
    description: "Revolutionizing Material Science with Precision and Innovation",
    image: "/categoryimg/electrospinning product 2.png",
    features: []
  },
  {
    id: "nanofibermembrane",
    title: "Nanofiber Membrane Technology",
    description: "Industrial-grade melt spinning solutions",
    image: "/categoryimg/membrane2.jpeg",
    features: []
  },
  {
    id: "nanofiberfunctionalproducts",
    title: "Nanofiber Functional Products",
    description: "Essential components and accessories",
    image: "/categoryimg/functional3.png",
    features: []
  }
] as const;

export default function ProductsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen pt-20">
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
          
        >
          <source src="/videos/spining tech.mp4" type="video/mp4" />
        </video>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 inset-0"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Product Categories
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <div key={category.id} onClick={() => router.push(`/products/${category.id}`)}>
              <ProductCard
                {...category}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}









// "use client";

// import { motion } from "framer-motion";
// import { ProductCard } from "@/components/products/ProductCard";
// import { useRouter } from "next/navigation";

// const PRODUCT_CATEGORIES = [
//   {
//     id: "electrospinning",
//     title: "Nanofibre Spinning Technology",
//     description: "Revolutionizing Material Science with Precision and Innovation",
//     image: "/product categories/nanofibertech.jpg",
//     features: []
//   },
//   {
//     id: "nanofibermembrane",
//     title: "Nanofibre Membrane Technology",
//     description: "Industrial-grade melt spinning solutions",
//     image: "/product categories/nanofiber membren.jpg",
//     features: []
//   },
//   {
//     id: "nanofibrefunctionalproducts",
//     title: "Nanofibre Functional Products",
//     description: "Essential components and accessories",
//     image: "/product categories/functional product.jpg",
//     features: []
//   }
// ] as const;

// export default function ProductsPage() {
//   const router = useRouter();

//   return (
//     <main className="min-h-screen pt-20">
//       <div className="relative h-[20vh] flex items-center justify-center overflow-hidden ">
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-red-900 to-black" />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-4"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Product Categories
//           </h1>
//         </motion.div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {PRODUCT_CATEGORIES.map((category, index) => (
//             <div key={category.id} onClick={() => router.push(`/products/${category.id}`)}>
//               <ProductCard
//                 {...category}
//                 index={index}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }