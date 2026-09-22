import Image from "next/image";

export function UniformHeat() {
  return (
    <section className="relative aspect-[2/1] w-full overflow-hidden rounded-t-[32px] sm:aspect-[21/9] sm:rounded-t-[40px] md:aspect-auto md:h-[340px] md:rounded-t-[80px] lg:h-[395px] lg:rounded-t-[100px]">
      <Image
        src="/assets/uniform-heat.png"
        alt="Infra Heat Technology"
        fill
        className="object-cover object-[22%_center] sm:object-[28%_center] md:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/25 to-transparent md:from-black/40 md:via-transparent" />
      <div className="absolute inset-y-0 right-0 flex w-[58%] items-center justify-end pr-10 pl-3 sm:w-[52%] sm:pr-14 md:w-[48%] md:pr-20 lg:w-[46%] lg:pr-28 xl:pr-32">
        <h2 className="w-full text-right text-[26px] font-bold leading-[1.15] sm:text-[36px] md:text-[52px] lg:text-[72px]">
          <span className="block text-accent">Infra Heat</span>
          <span className="block text-white">Technology</span>
        </h2>
      </div>
    </section>
  );
}
