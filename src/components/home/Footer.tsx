import Image from "next/image";
import Link from "next/link";

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
        <div className="relative mt-5 h-7 w-[246px] max-w-full overflow-hidden">
          <Image
            src="/assets/icon-social.svg"
            alt="Social links"
            width={246}
            height={28}
            className="h-full w-auto object-contain object-left"
          />
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
