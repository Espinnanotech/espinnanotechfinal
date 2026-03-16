"use client";

import { X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  const router = useRouter();
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isMediaExpanded, setIsMediaExpanded] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 bg-black/50 transition-opacity z-40",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-80 bg-white/80 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 border-b border-gray-200/50">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">Menu</span>
            <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => handleNavigation("/")}
                className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <div className="relative">
                <button 
                  onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                  className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors flex justify-between items-center"
                >
                  About Us
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-transform",
                    isAboutExpanded ? "rotate-90" : ""
                  )} />
                </button>
                {isAboutExpanded && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <button 
                        onClick={() => handleNavigation("/about")}
                        className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
                      >
                        Overview
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavigation("/about/board")}
                        className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
                      >
                        Board of Directors
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavigation("/about/advisory")}
                        className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
                      >
                        Scientific Advisory Committee
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavigation("/about/certificates")}
                        className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
                      >
                        Certificates
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavigation("/about/collaborations")}
                        className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
                      >
                        Our Collaborations
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation("/products")}
                className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                Products
              </button>
            </li>
            <li>
              <div className="relative">
                <button 
                  onClick={() => setIsMediaExpanded(!isMediaExpanded)}
                  className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors flex justify-between items-center"
                >
                  Media
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-transform",
                    isMediaExpanded ? "rotate-90" : ""
                  )} />
                </button>
                {isMediaExpanded && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li>
                      <button 
                        onClick={() => handleNavigation("/media")}
                        className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
                      >
                        News & Updates
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavigation("/media/gallery")}
                        className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
                      >
                        Gallery
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation("/publications")}
                className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                Publications
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigation("/contact")}
                className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}









// "use client";

// import { X, ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// interface MenuProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function Menu({ isOpen, onClose }: MenuProps) {
//   const router = useRouter();
//   const [isAboutExpanded, setIsAboutExpanded] = useState(false);

//   const handleNavigation = (path: string) => {
//     router.push(path);
//     onClose();
//   };

//   return (
//     <>
//       <div
//         className={cn(
//           "fixed inset-0 bg-white/50 transition-opacity z-40",
//           isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         )}
//         onClick={onClose}
//       />
//       <div
//         className={cn(
//           "fixed top-0 left-0 h-full w-80 bg-white/0 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out",
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         )}
//       >
//         <div className="p-4 border-b border-gray-200/50">
//           <div className="flex justify-between items-center">
//             <span className="font-semibold text-lg">Menu</span>
//             <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
//               <X className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
        
//         <nav className="p-4">
//           <ul className="space-y-4">
//             <li>
//               <button 
//                 onClick={() => handleNavigation("/")}
//                 className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <div className="relative">
//                 <button 
//                   onClick={() => setIsAboutExpanded(!isAboutExpanded)}
//                   className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors flex justify-between items-center"
//                 >
//                   About Us
//                   <ChevronRight className={cn(
//                     "h-4 w-4 transition-transform",
//                     isAboutExpanded ? "rotate-90" : ""
//                   )} />
//                 </button>
//                 {isAboutExpanded && (
//                   <ul className="pl-4 mt-2 space-y-2">
//                     <li>
//                       <button 
//                         onClick={() => handleNavigation("/about")}
//                         className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
//                       >
//                         About Us
//                       </button>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => handleNavigation("/about/board")}
//                         className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
//                       >
//                         Board of Directors
//                       </button>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => handleNavigation("/about/advisory")}
//                         className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
//                       >
//                         Scientific Advisory Committee
//                       </button>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => handleNavigation("/about/certificates")}
//                         className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
//                       >
//                         Certificates
//                       </button>
//                     </li>
//                     <li>
//                       <button 
//                         onClick={() => handleNavigation("/about/collaborations")}
//                         className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors text-sm"
//                       >
//                         Our Collaborations
//                       </button>
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             </li>
//             <li>
//               <button 
//                 onClick={() => handleNavigation("/products")}
//                 className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
//               >
//                 Products
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => handleNavigation("/media")}
//                 className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
//               >
//                 Media
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => handleNavigation("/publications")}
//                 className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
//               >
//                 Publications
//               </button>
//             </li>
//             <li>
//               <button 
//                 onClick={() => handleNavigation("/contact")}
//                 className="w-full text-left p-2 hover:bg-black/5 rounded-lg transition-colors"
//               >
//                 Contact Us
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }