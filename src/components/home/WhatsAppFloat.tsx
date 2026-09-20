import Image from "next/image";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919643221122"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex size-[62px] items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 md:bottom-8 md:right-8"
    >
      <span className="relative size-[35px] overflow-hidden">
        <Image
          src="/assets/icon-whatsapp.svg"
          alt=""
          width={35}
          height={35}
          className="size-full object-contain"
        />
      </span>
    </a>
  );
}
