"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/assets/lpgHero1.webp",
    alt: "VARCAS Heavy Duty LPG Iron Press",
  },
  {
    image: "/assets/lpgHero2.webp",
    alt: "VARCAS LPG Iron Press product view",
  },
  {
    image: "/assets/lpgHero3.webp",
    alt: "VARCAS commercial LPG iron press",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(id);
  }, [active]);

  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-b-[32px] sm:rounded-b-[40px] md:rounded-b-[80px] lg:rounded-b-[100px]"
    >
      <div className="relative aspect-[3/4] w-full sm:aspect-[4/5] md:aspect-auto md:h-[680px] lg:h-[756px]">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "z-0 opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover object-[72%_center] md:object-center"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20 md:bg-gradient-to-b md:from-black/10 md:via-black/20 md:to-black/50" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-5 pb-14 pt-24 sm:justify-center sm:pb-20 sm:pt-28 md:px-10 md:pb-24 md:pt-32 lg:px-20">
          <div className="animate-fade-up max-w-[500px]">
            <h1 className="font-sans text-[32px] font-bold leading-[1.1] tracking-tight sm:text-[40px] md:text-[56px] lg:text-[64px]">
              <span className="block text-accent">Heavy Duty</span>
              <span className="block text-white">LPG Iron Press</span>
            </h1>
            <p className="mt-4 text-left font-sans text-sm leading-relaxed text-white sm:mt-5 sm:text-justify sm:text-[15px] md:text-base">
              <strong className="font-semibold">Made in India</strong> for
              professional laundries, dry cleaners and high volume ironing work.{" "}
              <strong className="font-semibold">
                VARCAS Infra Heat Technology
              </strong>{" "}
              delivers fast, uniform heating with reliable commercial
              performance.
            </p>
            <a
              href="#models"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-[20px] bg-white/10 px-6 font-sans text-base text-white backdrop-blur-sm transition hover:bg-white hover:text-black sm:mt-8 sm:h-[55px]"
            >
              Explore Models
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 p-1 sm:bottom-6 md:bottom-8">
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Slide ${i + 1}`}
              aria-current={i === active ? true : undefined}
              onClick={() => setActive(i)}
              className={`h-[7px] w-[29px] rounded-full shadow ${
                i === active ? "bg-[#f0f0f0]" : "bg-[#f0f0f0]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
