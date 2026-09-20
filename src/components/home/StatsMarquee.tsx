import Image from "next/image";

const items = [
  {
    icon: "/assets/icon-maintenance.svg",
    title: "Easy Maintenance",
    subtitle: "Economical to repair",
  },
  {
    icon: "/assets/icon-models.svg",
    title: "5 Models",
    subtitle: "2.5 KG to 7 KG",
  },
  {
    icon: "/assets/icon-mileage.svg",
    title: "12–17 Hrs",
    subtitle: "Mileage range per kg LPG*",
  },
  {
    icon: "/assets/icon-unplugged.svg",
    title: "Unplugged",
    subtitle: "No electricity required",
  },
  {
    icon: "/assets/icon-infra.svg",
    title: "Infra Heat Technology",
    subtitle: "Fast & uniform heating",
  },
  {
    icon: "/assets/icon-fuel.svg",
    title: "Fuel Efficient",
    subtitle: "Designed to save LPG",
  },
  {
    icon: "/assets/icon-heavy.svg",
    title: "Heavy Duty Build",
    subtitle: "For daily commercial use",
  },
];

export function StatsMarquee() {
  const loop = [...items, ...items];

  return (
    <section className="overflow-hidden bg-background py-10 md:py-[60px]">
      <div className="flex w-max animate-marquee gap-10 md:gap-14">
        {loop.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="flex min-w-max items-center gap-3"
          >
            <div className="relative size-[39px] shrink-0 overflow-hidden">
              <Image
                src={item.icon}
                alt=""
                width={39}
                height={39}
                className="size-full object-contain"
              />
            </div>
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.8px] text-accent">
                {item.title}
              </p>
              <p className="text-[13px] text-white">{item.subtitle}</p>
            </div>
            <div className="ml-6 h-10 w-0.5 bg-white/10" />
          </div>
        ))}
      </div>
    </section>
  );
}
