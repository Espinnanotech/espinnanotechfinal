"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Truck,
  Check,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import type {
  MembraneProductPage,
  MembraneProduct,
} from "@/lib/constants/membrane-products";
import { MEMBRANE_PRODUCTS } from "@/lib/constants/membrane-products";
import { SUBCATEGORIES } from "@/lib/constants/products";

interface MembraneDetailClientProps {
  productPage: MembraneProductPage;
}

export function MembraneDetailClient({
  productPage,
}: MembraneDetailClientProps) {
  const router = useRouter();

  const { prevPage, nextPage, category } = useMemo(() => {
    let cat = "";
    for (const [catKey, subcats] of Object.entries(SUBCATEGORIES)) {
      const found = subcats.find((s) => s.id === productPage.id);
      if (found) {
        cat = catKey;
        break;
      }
    }

    const siblings = SUBCATEGORIES[cat as keyof typeof SUBCATEGORIES] || [];
    const currentIndex = siblings.findIndex((s) => s.id === productPage.id);
    const prev = currentIndex > 0 ? siblings[currentIndex - 1] : null;
    const next =
      currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

    return { prevPage: prev, nextPage: next, category: cat };
  }, [productPage.id]);

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="relative text-center py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/membrane-header-bg.jpeg"
            alt="Nanofiber membrane background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          {productPage.pageTitle}
        </h1>
      </div>
      {productPage.items.map((item, index) => (
        <MembraneItemSection key={item.id} item={item} isFirst={index === 0} />
      ))}

      <div className="fixed bottom-8 left-8 flex gap-4 z-50">
        {prevPage && (
          <button
            onClick={() => router.push(`/products/${category}/${prevPage.id}`)}
            className="bg-black/80 hover:bg-black text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label={`Previous: ${prevPage.title}`}
            title={prevPage.title}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
        )}
        {nextPage && (
          <button
            onClick={() => router.push(`/products/${category}/${nextPage.id}`)}
            className="bg-black/80 hover:bg-black text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label={`Next: ${nextPage.title}`}
            title={nextPage.title}
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </main>
  );
}

function MembraneItemSection({
  item,
  isFirst,
}: {
  item: MembraneProduct;
  isFirst: boolean;
}) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={`${!isFirst ? "border-t-4 border-gray-200" : ""}`}>
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {item.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {item.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={item.images[selectedImage]}
                    alt={item.subtitle}
                    fill
                    className="object-contain"
                    priority={isFirst}
                  />
                </div>
                <div className="flex gap-3 mt-4">
                  {item.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      aria-pressed={selectedImage === i}
                      aria-label={`View ${item.subtitle} image ${i + 1} of ${item.images.length}`}
                      className={`relative w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${
                        selectedImage === i
                          ? "border-red-500 shadow-md"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${item.subtitle} view ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black hover:bg-red-700 text-white font-semibold tracking-wider text-sm px-8 py-3 rounded transition-colors"
              >
                GET FREE QUOTE
                <ChevronRight className="w-4 h-4" />
              </Link>

              {item.applications && item.applications.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Key Applications
                  </h3>
                  <ul className="space-y-2">
                    {item.applications.map((app, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5"
                      >
                        <Check className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span className="text-sm text-gray-800">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2"
          >
            {item.description.heading}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src={item.description.image}
                  alt={`${item.description.heading} microscopy`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded">
                  Hover For High-Mag
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-sm md:text-[15px] leading-relaxed text-gray-700 text-justify"
            >
              {item.description.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {item.specifications.heading}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              <Link href="/contact" className="text-red-600 hover:underline">
                Contact us
              </Link>{" "}
              for any custom specification requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {item.specifications.groups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <div
                  className={`${
                    group.color === "blue" ? "bg-red-700" : "bg-red-600"
                  } text-white text-xs font-semibold px-4 py-1.5 rounded-full inline-block`}
                >
                  {group.title}
                </div>
                <div className="mt-3">
                  {group.items ? (
                    group.items.map((specItem, j) => (
                      <div
                        key={j}
                        className="flex items-center justify-between py-1"
                      >
                        <span className="text-sm text-gray-700">
                          {specItem.label}
                        </span>
                        {specItem.checked && (
                          <Check className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-800 text-sm mt-2">{group.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <div className="bg-red-700 text-white text-center text-sm font-semibold py-2 rounded-t-lg">
              Custom Sizes
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white border border-t-0 border-gray-200 rounded-b-lg p-6">
              {item.specifications.formats.map((fmt, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <FormatIcon icon={fmt.icon} />
                  <span className="text-xs font-medium text-gray-700">
                    {fmt.label}
                  </span>
                  {fmt.subtitle && (
                    <span className="text-[10px] text-gray-500">
                      {fmt.subtitle}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FormatIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    roll: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <ellipse cx="24" cy="14" rx="12" ry="6" />
        <path d="M12 14v20c0 3.3 5.4 6 12 6s12-2.7 12-6V14" />
        <ellipse cx="24" cy="34" rx="12" ry="6" />
      </svg>
    ),
    "sheet-large": (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <line x1="8" y1="16" x2="40" y2="16" />
        <line x1="8" y1="24" x2="40" y2="24" />
        <line x1="8" y1="32" x2="40" y2="32" />
      </svg>
    ),
    "sheet-small": (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="12" y="12" width="24" height="24" rx="2" />
        <line x1="12" y1="20" x2="36" y2="20" />
        <line x1="12" y1="28" x2="36" y2="28" />
      </svg>
    ),
    custom: (
      <svg
        viewBox="0 0 48 48"
        className="w-10 h-10 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="24" cy="20" r="10" />
        <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10" />
        <circle cx="36" cy="12" r="4" />
      </svg>
    ),
  };

  return <>{icons[icon] || null}</>;
}
