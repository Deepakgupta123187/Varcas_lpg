"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const images = [
  "/assets/gallery-1.png",
  "/assets/gallery-2.png",
  "/assets/gallery-3.png",
  "/assets/gallery-4.png",
  "/assets/gallery-5.png",
  "/assets/gallery-6.png",
  "/assets/gallery-7.png",
  "/assets/gallery-8.png",
  "/assets/gallery-9.png",
];

function GalleryItem({ src, index }: { src: string; index: number }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-[25px] bg-[#292929] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <Image
        src={src}
        alt={`Gallery image ${index + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
    </div>
  );
}

export function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = () => {
    setExpanded((current) => {
      if (current) {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return !current;
    });
  };

  const buttonClassName =
    "inline-flex h-12 items-center justify-center rounded-[20px] bg-white px-7 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition duration-300 hover:bg-accent hover:text-white cursor-pointer";

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="bg-surface px-5 py-16 md:px-10 md:py-20 lg:px-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <p className="text-base text-accent">Visual Highlights</p>
        <div className="mt-1 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-[26px] font-semibold text-white md:text-[30px]">
            Gallery
          </h2>
          <p className="max-w-md text-sm text-white lg:text-right lg:text-base">
            Take a closer look at our products in action.
          </p>
        </div>

        <div className="relative mt-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-[45px]">
            {images.slice(0, 6).map((src, index) => (
              <GalleryItem key={src} src={src} index={index} />
            ))}
          </div>

          <div
            className={`grid overflow-hidden transition-[grid-template-rows,margin,opacity] duration-700 ease-in-out motion-reduce:transition-none ${
              expanded
                ? "mt-4 grid-rows-[1fr] opacity-100 md:mt-6 lg:mt-[45px]"
                : "mt-0 grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-[45px]">
                {images.slice(6).map((src, index) => (
                  <GalleryItem key={src} src={src} index={index + 6} />
                ))}
              </div>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 bottom-0 z-10 flex items-end justify-center transition-opacity duration-500 motion-reduce:transition-none ${
              expanded
                ? "pointer-events-none h-0 opacity-0"
                : "h-32 opacity-100 sm:h-36 md:h-40"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/80 to-surface" />
            <button
              type="button"
              aria-expanded={expanded}
              onClick={toggle}
              className={`relative z-10 mb-3 sm:mb-4 md:mb-5 cursor-pointer ${buttonClassName}`}
            >
              View More
            </button>
          </div>
        </div>

        <div
          className={`flex justify-center overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-in-out motion-reduce:transition-none ${
            expanded ? "mt-8 max-h-16 opacity-100" : "mt-0 max-h-0 opacity-0"
          }`}
        >
          <button
            type="button"
            aria-expanded={expanded}
            tabIndex={expanded ? 0 : -1}
            onClick={toggle}
            className={buttonClassName}
          >
            View Less
          </button>
        </div>
      </div>
    </section>
  );
}
