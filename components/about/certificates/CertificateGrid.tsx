"use client";

import { motion } from "framer-motion";
import { CertificateCard } from "./CertificateCard";

const CERTIFICATES = [
  {
    name: "DSIR Recognition",
    image: "/certificates/DSIR.jpg"
  },
  {
    name: "Department of Industrial Policy and Promotion",
    image: "/certificates/DIPP-Certificate.png"
  },
  {
    name: "Ministry of Micro, Small and Medium Enterprises",
    image: "/certificates/MSME-Certificate.png"
  },
  {
    name: "National Small Scale Industries Corporation",
    image: "/certificates/NSIC-Certificate.png"
  },
  {
    name: "ISO 9001:2015",
    image: "/certificates/iso.png"
  },
  {
    name: "CE Certification",
    image: "/certificates/CE-Certificate.png"
  }
] as const;

export function CertificateGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {CERTIFICATES.map((certificate, index) => (
        <CertificateCard
          key={certificate.name}
          {...certificate}
          index={index}
        />
      ))}
    </div>
  );
}