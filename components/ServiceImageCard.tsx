"use client";
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

interface CardItem {
  title: string;
  image: string;
  link: string;
}

const CARDS: CardItem[] = [
  {
    title: "Nanofiber Spinning Technology",
    image: "/categoryimg/electrospinning product 2.png",
    link: "/products/electrospinning/electrospinning/",
  },
  {
    title: "Nanofiber Membrane Technology",
    image: "/categoryimg/membrane2.jpeg",
    link: "/products/nanofibermembrane",
  },
  {
    title: "Nanofiber Functional Products",
    image: "/categoryimg/functional3.png",
    link: "/products/nanofiberfunctionalproducts",
  },
];

export function ServiceImageCard() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {CARDS.map((card, index) => (
          <Link key={index} href={card.link} className="group">

            <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">

              {/* Image */}
              <div className="relative h-[180px] w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-lg font-semibold">
                {card.title}
                
              </div>

            </div>

          </Link>
        ))}

      </div>
    </section>
  );
}