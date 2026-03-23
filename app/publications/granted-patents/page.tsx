"use client";

import { motion } from "framer-motion";

const PATENTS = [
  {
    id: 1,
    country: "Chinese Patent: CHINA",
    number: "CN20128057431",
    title: "Composite Reusable Adhesives",
    year: "2012",
  },
  {
    id: 2,
    country: "World Intellectual Property Organisation",
    number: "WO2013093652A1",
    title: "Composite Reusable Adhesive",
    year: "2013",
  },
  {
    id: 3,
    country: "Japan Patent",
    number: "J2014-546674",
    title: "Composite Reusable Adhesives",
    year: "2014",
  },
  {
    id: 4,
    country: "US Patent",
    number: "US9540546B2",
    title: "Composite Reusable Adhesive",
    year: "2017",
  },
  {
    id: 5,
    country: "Indian Patent",
    number: "9540546",
    title: "Composite Reusable Adhesive",
    year: "2017",
  },
  {
    id: 6,
    country: "Indian Patent",
    number: "338299",
    title: "Method of Fabricating Microporous Elastomer Thin Films with Controllable Surface Pore Morphology and Monomodal Pore Size Distributions",
    year: "2020",
  },
  {
    id: 7,
    country: "Indian Patent",
    number: "375248",
    title: "An Antimicrobial Mask and a Valve Disposed Thereon",
    year: "2021",
  },
  {
    id: 8,
    country: "Indian Patent",
    number: "403376",
    title: "A washable and reusable facemask comprising PVDF composite nanofibers and a process for the synthesis of PVDF composite nanofibers",
    year: "2022",
  },
  {
    id: 9,
    country: "Indian Patent",
    number: "578151",
    title: "Newly designed chop saw metal cutting machine with control and protection over spark-splashing of high-speed particles, flame, and metal particulates",
    year: "2023",
  },
  {
    id: 10,
    country: "US Patent",
    number: "PCT / IN2019 / 050834",
    title: "Capillary type multi-jet nozzle for fabricating high throughput nanofibers",
    year: "2024",
  },
];

export default function GrantedPatentsPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="relative h-[20vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #000000 0%, #dc2626 50%, #7f1d1d 100%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Granted Patents
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Intellectual property milestones of E-Spin Nanotech
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mt-6" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {PATENTS.map((patent, index) => (
            <motion.div
              key={patent.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex gap-5 bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">
                {patent.id}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-red-600 bg-red-50 px-2 py-0.5 rounded">
                    {patent.country}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{patent.number}</span>
                  <span className="text-xs text-gray-400 ml-auto">{patent.year}</span>
                </div>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  {patent.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
