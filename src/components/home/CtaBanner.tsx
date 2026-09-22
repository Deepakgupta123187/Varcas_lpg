import Image from "next/image";

export function CtaBanner() {
  return (
    <section className="relative flex min-h-[200px] w-full items-center overflow-hidden px-5 py-10 sm:min-h-[240px] sm:py-16 md:min-h-[280px] md:px-10 md:py-20 lg:min-h-[369px] lg:px-[118px] lg:py-[93px]">
      <Image
        src="/assets/cta-banner.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1204px] text-center">
        <h2 className="text-[26px] font-bold leading-[1.15] sm:text-[32px] md:text-[48px] lg:text-[64px]">
          <span className="text-white">Power Your Laundry Business</span>
          <br className="hidden sm:block" />
          <span className="text-white"> with </span>
          <span className="text-accent">VARCAS.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-white md:mt-5 md:text-base">
          For product pricing, bulk supply, distributor enquiries or export
          orders, connect directly with VARCAS Industries.
        </p>
      </div>
    </section>
  );
}
