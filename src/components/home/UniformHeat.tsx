import Image from "next/image";

export function UniformHeat() {
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[32px] sm:aspect-[21/9] sm:rounded-t-[40px] md:aspect-auto md:h-[340px] md:rounded-t-[80px] lg:h-[395px] lg:rounded-t-[100px]">
      <Image
        src="/assets/uniform-heat.png"
        alt="Uniform heat professional finish"
        fill
        className="object-cover object-[16%_center] sm:object-[20%_center] md:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/25 to-transparent md:from-black/40 md:via-transparent" />
      <div className="absolute inset-0 flex items-center justify-end p-5 md:p-10 lg:px-20 lg:py-0">
        <h2 className="max-w-full text-right text-[22px] font-bold leading-[1.15] sm:text-[32px] md:text-[48px] lg:text-[64px]">
          <span className="block text-accent">Uniform Heat</span>
          <span className="block text-white">Professional Finish</span>
        </h2>
      </div>
    </section>
  );
}
