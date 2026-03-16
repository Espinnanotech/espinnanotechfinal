"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

interface LocationCardProps {
  title: string;
  address: readonly string[]; // Updated to accept readonly arrays
  email?: string;
  phone?: string;
  index: number;
}

export function LocationCard({ title, address, email, phone, index }: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-100 p-6 rounded-lg"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-3">
        <div className="flex gap-3">
          <MapPin className="h-5 w-5 text-red-600 shrink-0 mt-1" />
          <div>
            {address.map((line, i) => (
              <p key={i} className="text-gray-600">{line}</p>
            ))}
          </div>
        </div>
        {email && (
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-red-600" />
            <a href={`mailto:${email}`} className="text-gray-600 hover:text-red-600">
              {email}
            </a>
          </div>
        )}
        {phone && (
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-red-600" />
            <a href={`tel:${phone}`} className="text-gray-600 hover:text-red-600">
              {phone}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
















// "use client";

// import { motion } from "framer-motion";
// import { Mail, MapPin, Phone } from "lucide-react";

// interface LocationCardProps {
//   title: string;
//   address: string[];
//   email?: string;
//   phone?: string;
//   index: number;
// }

// export function LocationCard({ title, address, email, phone, index }: LocationCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="bg-gray-100 p-6 rounded-lg"
//     >
//       <h3 className="text-xl font-semibold mb-4">{title}</h3>
//       <div className="space-y-3">
//         <div className="flex gap-3">
//           <MapPin className="h-5 w-5 text-red-600 shrink-0 mt-1" />
//           <div>
//             {address.map((line, i) => (
//               <p key={i} className="text-gray-600">{line}</p>
//             ))}
//           </div>
//         </div>
//         {email && (
//           <div className="flex items-center gap-3">
//             <Mail className="h-5 w-5 text-red-600" />
//             <a href={`mailto:${email}`} className="text-gray-600 hover:text-red-600">
//               {email}
//             </a>
//           </div>
//         )}
//         {phone && (
//           <div className="flex items-center gap-3">
//             <Phone className="h-5 w-5 text-red-600" />
//             <a href={`tel:${phone}`} className="text-gray-600 hover:text-red-600">
//               {phone}
//             </a>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// }