import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const STATS = [
  { number: "15+", label: "Years in Nanofiber Solutions" },
  { number: "50+", label: "Patents & Publications" },
  { number: "10+", label: "Production Facilities" },
  { number: "50+", label: "Client Collaborations" },
] as const;

export function StatsSection() {
  return (
    <section className="relative min-h-[40vh] px-4 md:px-6 py-4 overflow-hidden flex items-center">
      {/* <BackgroundBeamsWithCollision> */}
        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-red-500">One-stop Solution</span>{" "}
              <span className="text-black">for Nanofiber Technology</span>
              <br />
              <span className="text-black">and</span>{" "}
              <span className="text-red-500">
                its Commercial Product Development
              </span>
            </h2>
          </div>

          {/* Vertical Line Divider */}
          <div className="hidden md:flex self-stretch border-l-2 border-red-600"></div>

          {/* Stats Section */}
          <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-8">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-red-500/60 hover:shadow-lg"
              >
                <div className="text-red-600 text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      {/* </BackgroundBeamsWithCollision> */}
    </section>
  );
}
















// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

// const STATS = [
//   { number: "10+", label: "Years in Nanofiber Solutions" },
//   { number: "50+", label: "Patents & Publications" },
//   { number: "10+", label: "Production Facilities" },
//   { number: "50+", label: "Client Collaborations" },
// ] as const;

// export function StatsSection() {
//   return (
//     <section className="relative min-h-[10vh] px-4 md:px-6 py-4 overflow-hidden flex items-center dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
//       {/* Background Image */}
//       {/* <div
//         className="absolute inset-y-0 right-0 w-1/2 z-0"
//         style={{
//           backgroundImage: 'url("/videos/statimg.png")', // Path to the image in the public folder
//           backgroundSize: 'cover', // Ensures image covers the allocated area
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       /> */}

//       {/* Content */}
//       <BackgroundBeamsWithCollision>
//         <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-start gap-12">
//           {/* Text Section */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-4xl md:text-5xl font-bold mb-8">
//               <span className="text-red-500">One-stop Solution</span>{" "}
//               <span className="text-black">for Nanofiber Technology</span>
//               <br />
//               <span className="text-black">and</span>{" "}
//               <span className="text-red-5-00">
//                 its Commercial Product Development
//               </span>
//             </h2>
//           </div>
//           <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-600 via-red-800 to-black/50 rounded-full" 
//           style={{ 
//             left: isRight ? 'auto' : 0,
//             right: isRight ? 0 : 'auto'
//           }} 
//         />

//           {/* Stats Section */}
//           <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-8">
//             {STATS.map((stat) => (
//               <div
//                 key={stat.label}
//                 className="group bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-red-500/60 hover:shadow-lg"
//               >
//                 <div className="text-red-600 text-4xl font-bold mb-2">
//                   {stat.number}
//                 </div>
//                 <p className="text-sm text-gray-600">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </BackgroundBeamsWithCollision>
//     </section>
//   );
// }

// const STATS = [
//   { number: "10+", label: "Years in Nanofiber Solutions" },
//   { number: "50+", label: "Patents & Publications" },
//   { number: "10+", label: "Production Facilities" },
//   { number: "50+", label: "Client Collaborations" },
// ] as const;

// export function StatsSection() {
//   return (
//     <section className="relative min-h-[60vh] bg-white px-4 md:px-6 py-12 overflow-hidden flex items-center">
//       {/* Background Image */}
//       {/* <div
//         className="absolute inset-y-0 right-0 w-1/2 z-0"
//         style={{
//           backgroundImage: 'url("/videos/statimg.png")', // Path to the image in the public folder
//           backgroundSize: 'cover', // Ensures image covers the allocated area
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       /> */}

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-start gap-12">
//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-4xl md:text-5xl font-bold mb-8">
//             <span className="text-red-600">One-stop Solution</span>{" "}
//             <span className="text-black">for Nanofiber Technology</span>
//             <br />
//             <span className="text-black">and</span>{" "}
//             <span className="text-red-600">its Commercial Product Development</span>
//           </h2>
//         </div>

//         {/* Stats Section */}
//         <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-2 gap-8">
//           {STATS.map((stat) => (
//             <div
//               key={stat.label}
//               className="bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-md"
//             >
//               <div className="text-red-600 text-4xl font-bold mb-2">{stat.number}</div>
//               <p className="text-sm text-gray-600">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// const STATS = [
//   { number: "10+", label: "Years in Nanofiber Solutions" },
//   { number: "50+", label: "Patents & Publications" },
//   { number: "10+", label: "Production Facilities" },
//   { number: "50+", label: "Client Collaborations" }
// ] as const;

// export function StatsSection() {
//   return (
//     <section className="bg-white px-4 md:px-6 py-12">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-xl mb-8">
//           One-stop Solution for Nanofiber<br />
//           Technology and R2R Commercial<br />
//           Product Development
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
//           {STATS.map((stat) => (
//             <div key={stat.label}>
//               <div className="text-red-600 text-3xl font-bold mb-2">{stat.number}</div>
//               <p className="text-sm text-gray-600">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
