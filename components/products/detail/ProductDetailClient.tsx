"use client";

import { motion } from "framer-motion";
import { NavigationButtons } from "../NavigationButtons";
import { ProductSpecifications } from "./ProductSpecifications";
import { ProductGallery } from "./ProductGallery";
import { DocumentButtons } from "./DocumentButtons";
import { DETAILED_PRODUCTS } from "@/lib/constants/detailed-products";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductDetailClientProps {
  productId: keyof typeof DETAILED_PRODUCTS;
}

export function ProductDetailClient({ productId }: ProductDetailClientProps) {
  const product = DETAILED_PRODUCTS[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="min-h-screen bg-white ">
      {/* Category Badge */}
      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="inline-block px-3 py-2"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative bg-white text-black overflow-hidden"
        style={{
          // backgroundImage: `url('/background image/E105ARL3.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated gradient background */}

        {/* Content */}
        <div className="relative z-10 max-w-[63vw] mx-auto px-2 ">
          <div className="flex justify-center">
            {/* Left Content */}
            <div className="flex-1 space-y-6 pt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                  {product.name}
                </h1>
                {/* <p className=" grid grid-cols-4 text-lg text-black">{product.description}</p> */}

                {/* <p className="grid grid-cols-1 text-lg text-black">
                  {product.description.map((line, index) => (
                    <span key={index}>{line}</span>
                  ))}
                </p> */}

                <p className="grid grid-cols-1 text-white w-80">
                  {Array.isArray(product.description)
                    ? product.description.map((line, index) => (
                        <span
                          key={index}
                          className="bg-gray-600 hover:bg-gray-800  px-2 py-1 rounded-md mb-2"
                        >
                          {line}
                        </span>
                      ))
                    : product.description}
                </p>

                <div className="flex gap-4 mt-8">
                  <Button
                    size="lg"
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Product Enquiry
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Main Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1 relative"
            >
              <div className="relative">
                <ProductGallery images={[...product.images]} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Specifications & Details */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-rows-1 lg:grid-rows-1 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DocumentButtons
              documents={product.documents.map((doc) => ({
                label: doc.label,
                url: doc.url,
              }))}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ProductSpecifications
              specifications={product.specifications.map((spec) => ({
                category: spec.category,
                items: spec.items.map((item) => ({
                  label: item.label,
                  value: item.value,
                })),
              }))}
            />
          </motion.div>
        </div>
      </div>

      <NavigationButtons showNext={false} />
    </main>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { NavigationButtons } from "../NavigationButtons";
// import { ProductSpecifications } from "./ProductSpecifications";
// import { ProductGallery } from "./ProductGallery";
// import { DocumentButtons } from "./DocumentButtons";
// import { DETAILED_PRODUCTS } from "@/lib/constants/detailed-products";

// type ProductId = keyof typeof DETAILED_PRODUCTS;

// interface ProductDetailClientProps {
//   productId: ProductId; // Strongly typed productId
// }

// // Type guard to validate productId
// function isValidProductId(id: string): id is ProductId {
//   return id in DETAILED_PRODUCTS;
// }

// export function ProductDetailClient({ productId }: ProductDetailClientProps) {
//   if (!isValidProductId(productId)) {
//     return <div>Product not found</div>;
//   }

//   const product = DETAILED_PRODUCTS[productId];

//   return (
//     <main className="min-h-screen pt-20">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-12"
//         >
//           {/* Convert readonly array to mutable */}
//           <ProductGallery images={[...product.images]} />

//           <div className="space-y-8">
//             <div>
//               <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//               <p className="text-lg text-gray-600">{product.description}</p>
//             </div>

//             {/* Convert readonly specifications to mutable */}
//             <ProductSpecifications
//               specifications={product.specifications.map((spec) => ({
//                 ...spec,
//                 items: [...spec.items],
//               }))}
//             />

//             <DocumentButtons documents={[...product.documents]} />
//           </div>
//         </motion.div>
//       </div>

//       <NavigationButtons showNext={false} />
//     </main>
//   );
// }
