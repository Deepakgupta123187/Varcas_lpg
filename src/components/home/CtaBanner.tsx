import Image from "next/image";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-10 md:py-20 lg:px-[118px] lg:py-[93px]">
      <Image
        src="/assets/cta-banner.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1204px] text-center">
        <h2 className="text-[32px] font-bold leading-[1.1] md:text-[48px] lg:text-[64px]">
          <span className="text-white">Power Your Laundry Business</span>
          <br />
          <span className="text-white">with </span>
          <span className="text-accent">VARCAS.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm text-white md:text-base">
          For product pricing, bulk supply, distributor enquiries or export
          orders, connect directly with VARCAS Industries.
        </p>
      </div>
    </section>
  );
}
