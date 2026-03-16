"use client";

import Link from "next/link";

interface ServiceCardProps {
  number: string;
  title: string;
  className?: string;
  link: string; // Added link prop
}

export function ServiceCard({ number, title, className = "", link }: ServiceCardProps) {
  return (
    <Link href={link} passHref>
      <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 relative border border-white/20 ${className} cursor-pointer`}>
        <div className="text-6xl font-bold text-white/70 mb-4">{number}</div>
        <p className="whitespace-pre-line font-semibold text-white">{title}</p>
      </div>
    </Link>
  );
}


// "use client";

// interface ServiceCardProps {
//   number: string;
//   title: string;
//   className?: string;
// }

// export function ServiceCard({ number, title, className = "" }: ServiceCardProps) {
//   return (
//     <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 relative border border-white/20 ${className}`}>
//       <div className="text-6xl font-bold text-white/70 mb-4">{number}</div>
//       <p className="whitespace-pre-line font-semibold text-white">{title}</p>
//     </div>
//   );
// }