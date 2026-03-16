"use client";

import { Menu as MenuIcon, Search } from "lucide-react";
import { Menu } from "./Menu";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get the base URL dynamically
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || ""; // Make sure this env variable is set in Vercel done

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300  ",
        "flex justify-between items-center p-4 md:p-6 ",
        isScrolled ? "bg-white shadow-md" : "bg-transparent "
      )}
    >
      <div className="flex items-center gap-40 ">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
        >
          <MenuIcon className="h-6 w-6" />
        </button>

        {/* Optimized Image */}
        <Image
          src="/videos/logo.png"
          alt="Logo"
          width={200}
          height={40}
          className="object-contain hidden md:block"
          priority
        />
      </div>
      
      {/* Mobile Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        
      {/* PDF Catalogue and Additional Button */}
      <div className="flex gap-4">
        <a
          href="/catalogue"
        >
          <Button
            variant="destructive"
            className="relative bg-red-500 hover:bg-red-700 text-white  px-6 py-2 rounded-md transition-transform duration-300 transform hover:scale-105"
            style={{
              boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
              transition: "box-shadow 0.3s ease-in-out, transform 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)";
            }}
          >
            Catalogue
          </Button>
        </a>
        
        {/* New Button */}
        <a
          href="https://espinai.space/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="default"
            className="bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-transform duration-300 transform hover:scale-105"
            style={{
              boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
              transition: "box-shadow 0.3s ease-in-out, transform 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)";
            }}
          >
            E-Spin AI
          </Button>
        </a>
      </div>
    </header>
  );
}










// "use client";

// import { Menu as MenuIcon, Search } from "lucide-react";
// import { Menu } from "./Menu";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Get the base URL dynamically
//   const baseUrl =
//     process.env.NEXT_PUBLIC_BASE_URL || ""; // Make sure this env variable is set in Vercel done

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300  ",
//         "flex justify-between items-center p-4 md:p-6 ",
//         isScrolled ? "bg-white shadow-md" : "bg-transparent "
//       )}
//     >
//       <div className="flex items-center gap-40 ">
//         <button
//           onClick={() => setIsMenuOpen(true)}
//           className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
//         >
//           <MenuIcon className="h-6 w-6" />
//         </button>

//         {/* Optimized Image */}
//         <Image
//           src="/videos/logo.png"
//           alt="Logo"
//           width={200}
//           height={40}
//           className="object-contain"
//           priority
//         />
//       </div>
      

//       {/* Mobile Menu */}
//       <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        

//       {/* PDF Catalogue Button */}
//       <a
//         href={`https://drive.google.com/file/d/11Vi6jJfWGsI3VlU9UE6YdvjvFHu4hAmq/view?usp=sharing`} // Absolute path with cache-busting query param
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <Button
//           variant="destructive"
//           className="relative bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-transform duration-300 transform hover:scale-105"
//           style={{
//             boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
//             transition: "box-shadow 0.3s ease-in-out, transform 0.3s",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.7)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)";
//           }}
//         >
//           Catalogue
//         </Button>
//       </a>
//     </header>
//   );
// }







































// "use client";

// import { Menu as MenuIcon } from "lucide-react";
// import { Menu } from "./Menu";
// import { useState, useEffect } from "react";
// import Image from "next/image"; // Import Image from next/image
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils"; // Ensure this utility is correctly imported

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
//         "flex justify-between items-center p-4 md:p-6",
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       )} 
//     >
//       <div className="flex items-center gap-40 ">
//         <button
//           onClick={() => setIsMenuOpen(true)}
//           className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
//         >
//           <MenuIcon className="h-6 w-6" />
//         </button>
//         {/* Replace img with next/image for optimization */}
//         <Image
//           src="/videos/logo.png" // Update with the actual path to your PNG logo
//           alt="Logo"
//           width={200} // Set the width of the logo
//           height={40} // Set the height of the logo
//           className="object-contain" // Optionally, use object-contain to maintain aspect ratio
//         />
//       </div>

//       {/* ChatBot Button with Glowing Animation */}
//       <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
//       <a
//         href="/pdf/catalogue.pdf" // Path to your PDF in the public folder
//         target="_blank" // Opens the link in a new tab
//         rel="noopener noreferrer" // Security best practice
//       >
//         <Button
//           variant="destructive"
//           className="relative bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-transform duration-300 transform hover:scale-105"
//           style={{
//             boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
//             transition: "box-shadow 0.3s ease-in-out, transform 0.3s",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.7)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)";
//           }}
//         >
//           Catalogue
//         </Button>
//       </a>
//     </header>
//   );
// }



































// "use client";

// import { Menu as MenuIcon } from "lucide-react";
// import { Menu } from "./Menu";
// import { useState, useEffect } from "react";
// import Image from "next/image"; // Import Image from next/image
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils"; // Ensure this utility is correctly imported

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         "flex justify-between items-center p-4 md:p-6",
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       )}
//     >
//       <div className="flex items-center gap-40">
//         <button
//           onClick={() => setIsMenuOpen(true)}
//           className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
//         >
//           <MenuIcon className="h-6 w-6" />
//         </button>
//         {/* Replace img with next/image for optimization */}
//         <Image
//           src="/videos/logo.png" // Update with the actual path to your PNG logo
//           alt="Logo"
//           width={200} // Set the width of the logo
//           height={40} // Set the height of the logo
//           className="object-contain" // Optionally, use object-contain to maintain aspect ratio
//         />
//       </div>

//       {/* ChatBot Button with Glowing Animation */}
//       <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
//       <Button
//         variant="destructive"
//         className="relative bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-transform duration-300 transform hover:scale-105"
//         style={{
//           boxShadow: "0 0 10px rgba(255, 0, 0, 0.5)",
//           transition: "box-shadow 0.3s ease-in-out, transform 0.3s",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.7)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.boxShadow = "0 0 10px rgba(255, 0, 0, 0.5)";
//         }}
//       >
//         Catalogue
//       </Button>
//     </header>
//   );
// }





































// "use client";

// import { Menu as MenuIcon, Search } from "lucide-react";
// import { Menu } from "./Menu";
// import { useState, useEffect } from "react";
// import Image from "next/image"; // Import Image from next/image
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils"; // Ensure this utility is correctly imported

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         "flex justify-between items-center p-4 md:p-6",
//         isScrolled ? "bg-white shadow-md" : "bg-transparent"
//       )}
//     >
//       <div className="flex items-center gap-8">
//         <button
//           onClick={() => setIsMenuOpen(true)}
//           className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
//         >
//           <MenuIcon className="h-6 w-6" />
//         </button>
//         {/* Replace img with next/image for optimization */}
//         <Image
//           src="/videos/logo.png" // Update with the actual path to your PNG logo
//           alt="Logo"
//           width={200} // Set the width of the logo
//           height={40} // Set the height of the logo
//           className="object-contain" // Optionally, use object-contain to maintain aspect ratio
//         />
//       </div>

//       {/* <Search className="h-6 w-6" /> */}

//       <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
//       <Button variant="destructive">ChatBot</Button>
//     </header>
//   );
// }












































// "use client";

// import { Menu as MenuIcon, Search } from "lucide-react";
// import { Menu } from "./Menu";
// import { useState } from "react";

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="flex justify-between items-center p-4 md:p-6">
//       <div className="flex items-center gap-8">
//         <button 
//           onClick={() => setIsMenuOpen(true)}
//           className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
//         >
//           <MenuIcon className="h-6 w-6" />
//         </button>
//         <span className="font-semibold text-lg">Discover</span>
//       </div>
//       <Search className="h-6 w-6" />
      
//       <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
//     </header>
//   );
// }

// "use client";

// import { Menu as MenuIcon, Search } from "lucide-react";
// import { Menu } from "./Menu";
// import { useState } from "react";
// import Image from "next/image"; // Import Image from next/image
// import { Button } from "@/components/ui/button"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="flex justify-between items-center p-4 md:p-6">
//       <div className="flex items-center gap-8">
//         <button 
//           onClick={() => setIsMenuOpen(true)}
//           className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
//         >
//           <MenuIcon className="h-6 w-6" />
//         </button>
//         {/* Replace img with next/image for optimization */}
//         <Image
//           src="/videos/logo.png" // Update with the actual path to your PNG logo
//           alt="Logo"
//           width={200}  // Set the width of the logo
//           height={40}  // Set the height of the logo
//           className="object-contain" // Optionally, use object-contain to maintain aspect ratio
//         />
//       </div>

      
//       {/* <Search className="h-6 w-6" /> */}
      
//       <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
//       <Button variant="destructive">ChatBot</Button>
//     </header>
//   );
// }
