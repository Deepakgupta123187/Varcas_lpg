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
      className="relative overflow-hidden rounded-b-[40px] md:rounded-b-[80px] lg:rounded-b-[100px]"
    >
      <div className="relative min-h-[560px] md:min-h-[680px] lg:min-h-[756px]">
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
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-center px-5 pb-20 pt-28 md:min-h-[680px] md:px-10 md:pb-24 md:pt-32 lg:min-h-[756px] lg:px-20">
          <div className="animate-fade-up max-w-[500px]">
            <h1 className="font-sans text-[40px] font-bold leading-[1.1] tracking-tight md:text-[56px] lg:text-[64px]">
              <span className="block text-accent">Heavy Duty</span>
              <span className="block text-white">LPG Iron Press</span>
            </h1>
            <p className="mt-5 text-justify font-sans text-[15px] leading-relaxed text-white md:text-base">
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
              className="mt-8 inline-flex h-[55px] items-center justify-center rounded-[20px] bg-white/10 px-6 font-sans text-base text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              Explore Models
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 p-1 md:bottom-8">
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
