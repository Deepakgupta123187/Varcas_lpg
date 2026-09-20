import Image from "next/image";

const cards = [
  {
    icon: "/assets/icon-heat.svg",
    title: "Fast & Uniform Heating",
    description:
      "Quick heat-up and even temperature distribution for smooth, consistent ironing.",
  },
  {
    icon: "/assets/icon-lpg.svg",
    title: "Lower LPG Consumption",
    description:
      "Designed to reduce LPG consumption and improve operating efficiency during long working hours.",
  },
  {
    icon: "/assets/icon-wrinkle.svg",
    title: "Quick Wrinkle Removal",
    description:
      "Strong, even heat distribution supports crisp wrinkle removal and a clean finished look.",
  },
  {
    icon: "/assets/icon-electric.svg",
    title: "Works Without Electricity",
    description:
      "Keep ironing even during power cuts and reduce dependency on electricity.",
  },
  {
    icon: "/assets/icon-stable.svg",
    title: "Stable Heat Performance",
    description:
      "Stable heat performance helps make routine cleaning, repair and upkeep economical.",
  },
  {
    icon: "/assets/icon-finish.svg",
    title: "Smooth Professional Finish",
    description:
      "Built for continuous professional use in laundry and garment-care businesses.",
  },
];

export function Technology() {
  return (
    <section
      id="technology"
      className="bg-surface px-5 py-16 md:px-10 md:py-20 lg:px-20"
    >
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-[26px] font-semibold text-white md:text-[30px]">
          Infra Heat Technology
        </h2>
        <div className="mt-8 grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-[45px]">
          {cards.map((card, index) => (
            <article
              key={card.title}
              tabIndex={0}
              aria-labelledby={`tech-title-${index}`}
              aria-describedby={`tech-desc-${index}`}
              className="tech-card group relative flex min-h-[168px] cursor-default items-center justify-center overflow-hidden rounded-[20px] bg-card px-3 py-4 transition-[background-color] duration-[400ms] ease-out hover:bg-[#FF6B00] focus-visible:bg-[#FF6B00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:min-h-[200px] sm:px-5 sm:py-6 md:px-6"
            >
              <div className="relative w-full">
                <div className="flex items-center justify-center gap-2 transition-transform duration-[400ms] ease-out group-hover:-translate-y-3 group-focus-visible:-translate-y-3 motion-reduce:transform-none motion-reduce:transition-none sm:gap-3">
                  <div className="relative size-8 shrink-0 sm:size-[39px]">
                    <Image
                      src={card.icon}
                      alt=""
                      width={39}
                      height={39}
                      className="size-full object-contain transition-[filter] duration-[400ms] ease-out group-hover:brightness-0 group-hover:invert group-focus-visible:brightness-0 group-focus-visible:invert motion-reduce:transition-none"
                    />
                  </div>
                  <h3
                    id={`tech-title-${index}`}
                    className="min-w-0 text-[13px] font-semibold leading-snug text-balance text-accent transition-colors duration-[400ms] ease-out group-hover:text-white group-focus-visible:text-white motion-reduce:transition-none sm:text-base"
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  id={`tech-desc-${index}`}
                  className="pointer-events-none absolute inset-x-0 top-full mt-0 w-full translate-y-1 text-left text-[11px] leading-snug text-white opacity-0 transition-[opacity,transform] duration-[400ms] ease-out group-hover:-translate-y-2 group-hover:opacity-100 group-focus-visible:-translate-y-2 group-focus-visible:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none sm:text-sm"
                >
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
