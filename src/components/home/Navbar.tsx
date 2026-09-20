"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Technology", href: "/#technology" },
  { label: "Models", href: "/#models" },
  { label: "Features", href: "/#features" },
  { label: "Accessories", href: "/#accessories" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

const CATALOGUE_HREF = "/assets/Catalogue_LPG%20Iron_Press.pdf";
const CATALOGUE_FILENAME = "VARCAS_LPG_Iron_Press_Catalogue.pdf";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        isHome ? "bg-transparent" : "bg-surface/90 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between gap-3 px-5 md:px-10 lg:px-20">
        <Link href="/" className="relative h-9 w-[117px] shrink-0">
          <Image
            src="/assets/logo.png"
            alt="VARCAS"
            fill
            sizes="117px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={CATALOGUE_HREF}
            download={CATALOGUE_FILENAME}
            className="hidden rounded-[15px] bg-white px-[15px] py-2.5 font-sans text-[13px] text-black transition hover:bg-accent hover:text-white sm:inline-flex"
          >
            Download Catalogue
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span className="h-0.5 w-full bg-white" />
              <span className="h-0.5 w-full bg-white" />
              <span className="h-0.5 w-full bg-white" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/80 px-5 py-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 font-sans text-sm text-white hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CATALOGUE_HREF}
              download={CATALOGUE_FILENAME}
              className="mt-1 rounded-[15px] bg-white px-4 py-3 text-center font-sans text-[13px] text-black"
              onClick={() => setOpen(false)}
            >
              Download Catalogue
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
