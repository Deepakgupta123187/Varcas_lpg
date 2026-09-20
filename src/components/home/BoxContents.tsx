import Image from "next/image";

const items = [
  {
    title: "Iron",
    desc: "VARCAS Heavy Duty LPG Iron Press",
    image: "/assets/box-iron.png",
  },
  {
    title: "Hose Pipe",
    desc: "LPG hose pipe for gas connection.",
    image: "/assets/box-hose.png",
  },
  {
    title: "Nozzle",
    desc: "Nozzle comes attached to the iron.",
    image: "/assets/box-nozzle.png",
  },
  {
    title: "Regulator",
    desc: "Regulator for LPG cylinder connection.",
    image: "/assets/box-regulator.png",
  },
  {
    title: "Pipe Clip",
    desc: "Pipe clips for secure hose fitting.",
    image: "/assets/box-clip.png",
  },
];

export function BoxContents() {
  return (
    <section id="accessories" className="bg-surface px-5 py-16 md:px-10 md:py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-base text-accent">Package Contents</p>
        <div className="mt-1 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-[26px] font-semibold text-white md:text-[30px]">
            What&apos;s Inside the Box
          </h2>
          <p className="max-w-md text-sm text-white lg:text-right lg:text-sm">
            Everything you need to connect and prepare your VARCAS Heavy Duty
            LPG Iron Press for professional use.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-[45px]">
          {items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[20px] border-2 border-transparent bg-card transition-[transform,border-color,box-shadow] duration-300 ease-out hover:z-10 hover:scale-[1.05] hover:border-[#FF6B00] hover:shadow-[0_0_22px_rgba(255,107,0,0.45)] motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <div className="relative aspect-square w-full bg-white/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 220px"
                />
              </div>
              <div className="px-3 py-4 text-center">
                <h3 className="text-xs font-bold text-accent">{item.title}</h3>
                <p className="mt-1 text-[10px] leading-snug text-white md:text-[11px]">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
