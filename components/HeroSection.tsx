"use client";

import { useState, useEffect } from "react";
import { ServiceCard } from "./ServiceCard";
import { Cover } from "@/components/ui/cover";

// Updated to remove reliance on empty `number` field
// const SERVICES = [
//   { number: "", title: "Nanofiber Spinning\nTechnology", link: "/products/electrospinning" },
//   { number: "", title: "Nanofiber Membrane\nTechnology", link: "/products/nanofibermembrane" },
//   { number: "", title: "Nanofiber Functional\nProducts", link: "/products/nanofibrefunctionalproducts" },
// ] as const;

// const FLASH_POPUPS = [
//   { text: "Spinning Hollow Fiber", top: "15%", left: "60%", delay: 900 },
//   { text: "Electrospinning", top: "70%", left: "20%", delay: 1200 },
//   { text: "Nanofiber Membrane", top: "30%", left: "10%", delay: 1500 },
//   { text: "Advanced Filtration", top: "55%", left: "65%", delay: 1800 },
//   { text: "Polymer Solutions", top: "80%", left: "45%", delay: 2100 },
//   { text: "Hollow Fiber Technology", top: "20%", left: "35%", delay: 2400 },
// ];

export function HeroSection() {
  // const [showContent, setShowContent] = useState(false);
  // const [overlayOpacity, setOverlayOpacity] = useState(0);
  // const [visiblePopups, setVisiblePopups] = useState<boolean[]>(
  //   new Array(FLASH_POPUPS.length).fill(false)
  // );

  // useEffect(() => {
  //   const contentTimer = setTimeout(() => {
  //     setShowContent(true);
  //   }, 3000);

  //   const overlayTimer = setTimeout(() => {
  //     setOverlayOpacity(0.4);
  //   }, 3000);

  //   const showTimers: ReturnType<typeof setTimeout>[] = [];
  //   const hideTimers: ReturnType<typeof setTimeout>[] = [];

  //   FLASH_POPUPS.forEach((popup, index) => {
  //     const showTimer = setTimeout(() => {
  //       setVisiblePopups((prev) => {
  //         const next = [...prev];
  //         next[index] = true;
  //         return next;
  //       });
  //     }, popup.delay);

  //     const hideTimer = setTimeout(() => {
  //       setVisiblePopups((prev) => {
  //         const next = [...prev];
  //         next[index] = false;
  //         return next;
  //       });
  //     }, popup.delay + 700);

  //     showTimers.push(showTimer);
  //     hideTimers.push(hideTimer);
  //   });

  //   return () => {
  //     clearTimeout(contentTimer);
  //     clearTimeout(overlayTimer);
  //     showTimers.forEach(clearTimeout);
  //     hideTimers.forEach(clearTimeout);
  //   };
  // }, []);

  return (
    <section className="relative min-h-[65vh] px-4 md:px-6 py-4 overflow-hidden ">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/landing video sample2.mov" type="video/mp4" />
      </video>

      {/* Overlay with animated opacity */}
      {/* <div
        className="absolute inset-0 bg-black z-10 transition-opacity duration-1000"
        style={{ opacity: overlayOpacity }}
      /> */}

      {/* Flash popups scattered across the screen - appear and disappear before main content */}
      {/* <div className="absolute inset-0 z-[15] pointer-events-none">
        {FLASH_POPUPS.map((popup, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-500 ease-out ${
              visiblePopups[index]
                ? "opacity-100 scale-100"
                : "opacity-0 scale-50"
            }`}
            style={{ top: popup.top, left: popup.left }}
          >
            <span className="text-w text-lg md:text-2xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] whitespace-nowrap">
              {popup.text}
            </span>
          </div>
        ))}
      </div> */}

      {/* <div
        className={`relative z-20 max-w-7xl mx-auto text-white transition-opacity duration-5000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mt-40">
          <span className="text-6xl md:text-7xl">Innovative</span>
          <br />
          <span className="text-red-500"> Fiber Technology</span>
        </h1>
        <p className="text-gray-100 max-w-xl mb-12 pt-4">
          Our innovative solutions offer engineered nanofiber technology for
          various applications, enabling advanced material development and
          groundbreaking research.
        </p>
      </div> */}
    </section>
  );
}



















// "use client";

// import { useState, useEffect } from "react";
// import { ServiceCard } from "./ServiceCard";
// import { Cover } from "@/components/ui/cover";



// // { number: "", title: "Nanofiber\nSpinning\nTechnology", link: "/products/electrospinning" },
// // { number: "", title: "Nanofiber\nMembrane\nTechnology", link: "/products/nanofibermembrane" },
// // { number: "", title: "Nanofiber\nFunctional\nProducts", link: "/products/nanofibrefunctionalproducts" },

// const SERVICES = [
//   { number: "", title: "Nanofiber Spinning\nTechnology", link: "/products/electrospinning" },
//   { number: "", title: "Nanofiber Membrane\nTechnology", link: "/products/nanofibermembrane" },
//   { number: "", title: "Nanofiber Functional\nProducts", link: "/products/nanofibrefunctionalproducts" },
// ] as const;


// export function HeroSection() {
//   const [showContent, setShowContent] = useState(false);
//   const [overlayOpacity, setOverlayOpacity] = useState(0);

//   useEffect(() => {
//     // Show content after 5 seconds
//     const contentTimer = setTimeout(() => {
//       setShowContent(true);
//     }, 2000);

//     // Gradually increase overlay opacity
//     const overlayTimer = setTimeout(() => {
//       setOverlayOpacity(0.4);
//     }, 2000);

//     return () => {
//       clearTimeout(contentTimer);
//       clearTimeout(overlayTimer);
//     };
//   }, []);

//   return (
//     <section className="relative min-h-[90vh] px-4 md:px-6 py-12 overflow-hidden ">
//       {/* Video Background */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/videos/landing video simple.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay with animated opacity */}
//       <div
//         className="absolute inset-0 bg-black z-10 transition-opacity duration-1000"
//         style={{ opacity: overlayOpacity }}
//       />

    
//       <div
//         className={`relative z-20 max-w-7xl mx-auto text-white transition-opacity duration-1000 ${
//           showContent ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mt-40">
//           {/* <span className="text-6xl md:text-7xl text-red-500">Innovative</span> */}
//           <span className="text-6xl md:text-7xl">Innovative</span>
//           <br />
//           {/* <Cover className="text-white">Fiber Technology</Cover> */}
//           <span className="text-red-500"> Fiber Technology</span>
//         </h1>
//         <p className="text-gray-100 max-w-xl mb-12 pt-4">
//           Our innovative solutions offer engineered nanofiber solutions for
//           various applications, enabling advanced material development and
//           groundbreaking research.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40 text-xl">
//           {SERVICES.map((service) => (
//             <ServiceCard
//               key={service.number}
//               {...service}
//               className={`transition-transform duration-1000 delay-${
//                 parseInt(service.number) * 200
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









{/* Content with fade-in animation */}
      {/* <div
        className={`relative z-20 max-w-7xl mx-auto text-white transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mt-40">
          Innovative
          <br />
          <span className="text-red-500">Fiber Technology</span>
        </h1>
        <p className="text-gray-100 max-w-xl mb-12">
          Our innovative solutions offer engineered nanofiber solutions for
          various applications, enabling advanced material development and
          groundbreaking research.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.number}
              {...service}
              className={`transition-transform duration-1000 delay-${
                parseInt(service.number) * 200
              }`}
            />
          ))}
        </div>
      </div> */}