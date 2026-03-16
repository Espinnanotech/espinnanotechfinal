"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[22rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden bg-muted">
      <InfiniteMovingCards
        items={cards}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const cards = [
  {
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "/clintes logo/250_250_16300470401.jpeg",
  },
  {
    name: "William Shakespeare",
    title: "Hamlet",
    image: "/clintes logo/20190311110031159csir.png",
  },
  {
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: "/clintes logo/academic-emblem.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/BITS_Pilani-Logo.svg.png",
  },
  {
    name: "Herman Melville",
    title: "Moby-Dick",
    image: "/clintes logo/Central_Glass_and_Ceramic_Research_Institute_Logo.svg.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/Central_University_of_Gujarat_Emblem.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/Dhaka_University_logo.svg.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/eucare-pharmaceuticals-pvt-ltd-thirumudivakkam-chennai-surgical-equipment-dealers-1lq71py-250.avif",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/Government_College_of_Engineering_&_Textile_Technology_logo.jpg",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/IICT_Hyderabad_Logo.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/IIT_Guwahati_Logo.svg.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/IIT_Hyderabad_Insignia.svg.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/images.jfif",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/images.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/Indian_Institute_of_Science_2019_logo.svg.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/Indian_Institute_of_Technology_Bombay_Logo.svg.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/Indian_Institute_of_Technology_Delhi_Logo.svg.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/Indian_Institute_of_Technology_Roorkee_Logo.svg.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/KAUST_Logo.svg.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/logo_nmu.webp",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/Ministry_of_Defence.webp",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/NITK_Emblem.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/Rajiv_Gandhi_Institute_of_Petroleum_Technology.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/Sankara-Nethralaya-Medical-Research-Foundation.jpg",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/University_of_Wyoming_seal.svg.png",
  },
  {
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/clintes logo/UPV-Logo-700x394.png",
  },
];



















// "use client";

// import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// export function InfiniteMovingCardsDemo() {
//   return (
//     <div className="h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
//       <InfiniteMovingCards
//         items={testimonials}
//         direction="right"
//         speed="slow"
//       />
//     </div>
//   );
// }

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
