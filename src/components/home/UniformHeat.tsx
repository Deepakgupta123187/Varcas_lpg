import Image from "next/image";

export function UniformHeat() {
  return (
    <section className="relative h-[280px] overflow-hidden rounded-t-[40px] md:h-[340px] md:rounded-t-[80px] lg:h-[395px] lg:rounded-t-[100px]">
      <Image
        src="/assets/uniform-heat.png"
        alt="Uniform heat professional finish"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-y-0 right-0 flex max-w-[90%] items-center px-5 md:max-w-[60%] md:px-10 lg:px-20">
        <h2 className="text-right text-[32px] font-bold leading-[1.1] md:text-[48px] lg:text-[64px]">
          <span className="text-accent">Uniform Heat</span>
          <br />
          <span className="text-white">Professional Finish</span>
        </h2>
      </div>
    </section>
  );
}
