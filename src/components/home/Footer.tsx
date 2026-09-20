import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/varcas_iron_press/",
    src: "/assets/instagram.png",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@VarcasIronPress",
    src: "/assets/youtube.png",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@lpg.iron.press",
    src: "/assets/tiktok.png",
  },
];

export function Footer() {
  return (
    <footer className="rounded-t-[40px] bg-surface px-5 py-12 md:rounded-t-[80px] md:px-10 md:py-14 lg:rounded-t-[100px] lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <Link href="/" className="relative block h-11 w-[190px]">
          <Image
            src="/assets/logo.png"
            alt="VARCAS"
            fill
            className="object-contain object-left"
          />
        </Link>
        <p className="mt-5 text-sm text-white md:text-base">
          VARCAS Industries Pvt. Ltd. | Heavy Duty LPG Iron Press. Made in India
        </p>
        <div className="mt-5 flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex size-7 items-center justify-center transition hover:opacity-80"
            >
              <Image
                src={social.src}
                alt=""
                width={28}
                height={28}
                className="size-7 object-contain"
              />
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] text-white sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Link href="/terms" className="transition hover:text-accent">
              Terms & Conditions
            </Link>
            <span className="text-white/40" aria-hidden="true">
              |
            </span>
            <Link href="/privacy" className="transition hover:text-accent">
              Privacy Policy
            </Link>
          </nav>
          <p>© 2026 VARCAS Industries. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
