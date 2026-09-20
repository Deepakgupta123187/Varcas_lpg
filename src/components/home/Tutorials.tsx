import Image from "next/image";

export function Tutorials() {
  return (
    <section className="bg-surface px-5 py-16 md:px-10 md:py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-base text-accent">Quick Guide</p>
        <div className="mt-1 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-[26px] font-semibold text-white md:text-[30px]">
            Tutorials
          </h2>
          <p className="max-w-md text-sm text-white lg:text-right lg:text-base">
            Watch, learn, and make the most of your commercial ironing solution.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-[45px]">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="relative aspect-video overflow-hidden rounded-[20px] bg-card"
            >
              <Image
                src="/assets/tutorial.png"
                alt={`Tutorial video ${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
