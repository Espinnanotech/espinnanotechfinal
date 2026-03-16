"use client";


export function ScienceSection() {
  const milestones = [
    {
      title: "Advanced Scientific Instruments",
    },
    {
      title: "Filtration Systems",
    },
    {
      title: "Scientific Consultancy & Services",
    },
  ];

  return (
    <section className="px-4 min-h-[30vh] md:px-6 pt-8 py-8">
      <div className="max-w-7xl mx-auto pt-12">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
              Our Expertise
            </span>
          </h2>

          <a
            href="https://wa.me/916307666465"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 font-bold text-white bg-black rounded-md group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 via-black to-red-600 opacity-0 group-hover:opacity-100 transition duration-300"></span>
            <span className="relative z-10 block group-hover:scale-105 transition">
              Connect with us
            </span>
            <div className="absolute inset-0 border-2 border-transparent rounded group-hover:border-red-600 transition-all duration-300"></div>
          </a>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* horizontal line */}
          <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 overflow-hidden">
            
            {/* moving light bar */}
            <div
              className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80"
              style={{
                animation: "moveLight 3s linear infinite",
              }}
            ></div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {milestones.map((item, index) => (
              <div key={index} className="relative text-center pt-10">
                
                {/* dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-md"></div>

                {/* heading */}
                <h3 className="font-bold text-2xl mb-2">
                  {item.title}
                </h3>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes moveLight {
          0% {
            left: -150px;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
}




// export function ScienceSection() {
//   const milestones = [
//     {
//       title: "Advanced Scientific Instruments",
//       // description:
//       //   "Design and development of high-precision laboratory and industrial scientific instruments.",
//     },
//     {
//       title: "Filtration Systems",
//       // description:
//       //   "Innovative filtration technologies for research, pharmaceutical, and industrial applications.",
//     },
//     {
//       title: "Scientific Consultancy & Services",
//       // description:
//       //   "Expert consultancy, technical support, and customized scientific solutions.",
//     },
//   ];

//   return (
//     <section className="px-4 min-h-[30vh] md:px-6 pt-8 py-8">
//       <div className="max-w-7xl mx-auto pt-12">
        
//         {/* Header */}
//         <div className="flex justify-between items-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
//               Our Expertise
//             </span>
//           </h2>

//           <button className="relative px-6 py-3 font-bold text-white bg-black rounded-md group overflow-hidden">
//             <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 via-black to-red-600 opacity-0 group-hover:opacity-100 transition duration-300"></span>
//             <span className="relative z-10 block group-hover:scale-105 transition">
//               Connect with us
//             </span>
//             <div className="absolute inset-0 border-2 border-transparent rounded group-hover:border-red-600 transition-all duration-300"></div>
//           </button>
//         </div>

//         {/* Timeline */}
//         <div className="relative">
          
//           {/* horizontal line */}
//           <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200"></div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//             {milestones.map((item, index) => (
//               <div key={index} className="relative text-center pt-10">
                
//                 {/* dot */}
//                 <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-md"></div>

//                 {/* heading */}
//                 <h3 className="font-bold text-2xl mb-2">
//                   {item.title}
//                 </h3>

//                 {/* description */}
//                 {/* <p className="text-sm text-gray-600 max-w-xs mx-auto">
//                   {item.description}
//                 </p> */}

//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




// export function ScienceSection() {
//   return (
//     <section className="px-4 min-h-[40vh] md:px-6 pt-8">
      
//       <div className="max-w-7xl mx-auto pt-12">
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
//               Our Expertise
//             </span>
//           </h2>
//           <button className="relative px-6 py-3 font-bold text-white bg-black rounded-md group overflow-hidden">
//             <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 via-black to-red-600 opacity-0 group-hover:opacity-100 transition duration-300"></span>
//             <span className="relative z-10 block transition-transform transform group-hover:scale-105">
//               Connect with us
//             </span>
//             <div className="absolute inset-0 border-2 border-transparent rounded group-hover:border-red-600 transition-all duration-300"></div>
//           </button>
//         </div>

//         <div className="relative">
//           <div className="h-1 bg-gray-200 absolute top-4 left-0 right-0" />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//             {[1, 2, 3].map((step) => (
//               <div key={step} className="pt-8">
//                 <div className="w-8 h-8 rounded-full bg-red-600 absolute top-0" />
//                 <p className="text-sm text-gray-600">
//                   Advanced Scientific Instruments Filtration Systems Scientific
//                   Consultancy and Services
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export function ScienceSection() {
//   return (
//     <section className="px-4 min-h-[60vh] md:px-6 py-12">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
//               The Science
//             </span>
//             <br />
//             Behind Our Services
//           </h2>
//           <button className="bg-black text-white px-6 py-2 rounded">
//             MAKE AN APPOINTMENT
//           </button>
//         </div>

//         <div className="relative">
//           <div className="h-1 bg-gray-200 absolute top-4 left-0 right-0" />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//             {[1, 2, 3].map((step) => (
//               <div key={step} className="pt-8">
//                 <div className="w-8 h-8 rounded-full bg-red-600 absolute top-0" />
//                 <p className="text-sm text-gray-600">
//                   At Right Nanofiber Technology, we are committed to empowering businesses with cutting-edge solutions that drive innovation and success.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export function ScienceSection() {
//   return (
//     <section className="px-4 min-h-[60vh] md:px-6 py-12">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-2xl font-bold">
//             The <span className="text-red-600">SCIENCE</span><br />
//             Behind Our Services
//           </h2>
//           <button className="bg-black text-white px-6 py-2 rounded">
//             MAKE AN APPOINTMENT
//           </button>
//         </div>

//         <div className="relative">
//           <div className="h-1 bg-gray-200 absolute top-4 left-0 right-0" />
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//             {[1, 2, 3].map((step) => (
//               <div key={step} className="pt-8">
//                 <div className="w-8 h-8 rounded-full bg-red-600 absolute top-0" />
//                 <p className="text-sm text-gray-600">
//                   At Right Nanofiber Technology, we are committed to empowering businesses with cutting-edge solutions that drive innovation and success.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
