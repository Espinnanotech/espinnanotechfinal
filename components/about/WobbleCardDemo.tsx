"use client";


export function WobbleCardDemo() {
  return (
    <div
      className="mx-auto min-w-[50rem] min-h-[85vh] bg-cover bg-center shadow-lg"
      style={{ backgroundImage: "url('/image/section.png')" }}
    >
      {/* Your content goes here */}
    </div>
  );
}













// "use client";
// import Image from "next/image";
// import React from "react";
// import { WobbleCard } from "../ui/wobble-card";

// export function WobbleCardDemo() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
//       <WobbleCard
//         containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
//         className=""
//       >
//         <div className="max-w-xs">
//           <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white ">
//           Mission
//           </h2>
//           <p className="mt-4 text-left min-w-[45rem]  text-base/6  text-white">
//           E-Spin Nanotech Pvt Ltd, founded in 2010 as a spin-off from IIT Kanpur, aims to leverage nanotechnology for commercial and societal benefits. Led by experts in nanotechnology, the company has grown into a global leader in nanofiber membrane technology with advanced manufacturing facilities.
//           </p>
//         </div>
//         <Image
//           src="/linear.webp"
//           width={500}
//           height={500}
//           alt="linear demo image"
//           className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
//         />
//       </WobbleCard>
//       <WobbleCard containerClassName="col-span-1 min-h-[300px]">
//         <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//         Research and Innovation
//         </h2>
//         <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-100">
//         E-Spin innovates nanotech-based air and liquid filtration with DSIR-recognized R&D, top scientists, and advanced manufacturing.
//         </p>
//       </WobbleCard>
//       <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
//         <div className="max-w-sm">
//           <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//           Vision
//           </h2>
//           <p className="mt-4 min-w-[70rem] text-left  text-base/6 text-neutral-100">
//           E-Spin Nanotech has built a strong presence in both the Indian and global nanotechnology industries. Their success is attributed to superior technical expertise, state-of-the-art infrastructure, cutting-edge equipment, and exceptional client service.
//           </p>
//         </div>
//         <Image
//           src="/linear.webp"
//           width={500}
//           height={500}
//           alt="linear demo image"
//           className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
//         />
//       </WobbleCard>
//     </div>
//   );
// }
