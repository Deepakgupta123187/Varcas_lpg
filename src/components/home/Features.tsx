import Image from "next/image";

const features = [
  {
    title: "InfraHeat Technology",
    desc: "Saves LPG and improves efficiency.",
  },
  {
    title: "No Electricity Required",
    desc: "Works On LPG",
  },
  {
    title: "Low LPG Consumption",
    desc: "20 - 25% Extra Mileage with Infra Heat Technology",
  },
  {
    title: "Heavy-Duty Construction",
    desc: "Strong and heat-resistant.",
  },
  {
    title: "Adjustable Heat Control",
    desc: "Suitable for different fabrics.",
  },
  {
    title: "Easy Repair & Maintenance",
    desc: "Self Quick Repair & Servicing",
  },
  {
    title: "Cast Iron Body",
    desc: "Strong, durable and long-lasting.",
  },
  {
    title: "Built for Commercial Use",
    desc: "Built for long daily use.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-surface px-5 py-16 md:px-10 md:py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-base text-accent">Product Features</p>
        <div className="mt-1 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-[26px] font-semibold text-white md:text-[30px]">
            Built to Perform. Engineered to Last.
          </h2>
          <p className="max-w-md text-sm text-white lg:text-right lg:text-sm">
            Built for long hours, reliable performance & easy maintenance.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[24px]">
          <div className="absolute inset-0">
            <Image
              src="/assets/features-product.png"
              alt=""
              fill
              className="object-cover object-right"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/20" />
          </div>

          <div className="relative grid grid-cols-1 gap-x-10 gap-y-7 p-6 sm:grid-cols-2 md:p-10 lg:max-w-[70%] lg:gap-x-[50px] lg:gap-y-[30px] lg:p-12">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-3">
                <div className="relative mt-0.5 h-[34px] w-6 shrink-0 overflow-hidden">
                  <Image
                    src="/assets/icon-check.svg"
                    alt=""
                    width={24}
                    height={34}
                    className="size-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/90 md:text-base">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
