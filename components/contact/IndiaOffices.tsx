"use client";

import { LocationCard } from "./LocationCard";
type LocationCardProps = {
  address: readonly string[]; // Accepts readonly arrays
  // other props...
};


const INDIA_OFFICES = [
  {
    title: "Kanpur Head Office",
    address: [
      "E-Spin Nanotech Pvt Ltd",
      "NL - 115,",
      "Northern Laboratory,",
      "Manufacturing Science Laboratory,",
      "Indian Institute of Technology Kanpur",
      "U.P. 208016, India.",
    ],
    email: "info@espinnanotech.com",
  },
  {
    title: "Ahmedabad",
    address: [
      "Manufacturing Unit:",
      "Plot No.A/10,11,12,",
      "Swagat Industrial Park-3,",
      "Nr. Kuha Village,",
      "Ahmedabad - Indore Highway,",
      "Ahmedabad - 382433,",
      "Gujarat.",
    ],
  },
  {
    title: "Delhi",
    address: [
      "Noida Office",
      "Noida Office E-Spin Nanotech Pvt Ltd",
      "B-95, Sector - 2, Noida,",
      "Delhi - 201301,",
    ],
    phone: "+91 9310801985 - 491 8800138139",
    email: "info@espinnanotech.com",
  },
] as const;

export function IndiaOffices() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 border-b border-red-600 pb-2">India</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INDIA_OFFICES.map((office, index) => (
          <LocationCard key={office.title} {...office} index={index} />
        ))}
      </div>
    </div>
  );
}