"use client";

import { LocationCard } from "./LocationCard";

const OVERSEAS_PARTNERS = [
  {
    title: "Russia",
    address: [
      "E-Spin Nanotech Pvt ltd",
      "Promenegolab LLC,",
      "Russia Moscow -105318",
      "Tkaskaya Str.1",
    ],
  },
  {
    title: "Korea",
    address: [
      "Marketing and Manufacturing",
      "Partner: NINANO Inc.",
      "347 Seongengbyeon-Ro, Sanoe-Myeon,",
      "Miryang-Si,",
      "Gyeongsangnam-Do, 50411,",
      "Rep. of Korea",
    ],
    phone: "+82-553524742",
    email: "hallooh001@gmail.com",
  },
  {
    title: "Egypt",
    address: [
      "NANOFIBTECK LLC",
      "Building No.4 - 151 St",
      "El Meadi",
      "Cairo.",
    ],
  },
] as const;

export function OverseasPartners() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 border-b border-red-600 pb-2">Overseas Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OVERSEAS_PARTNERS.map((partner, index) => (
          <LocationCard key={partner.title} {...partner} index={index} />
        ))}
      </div>
    </div>
  );
}