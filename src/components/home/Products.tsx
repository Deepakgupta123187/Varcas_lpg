import Image from "next/image";

const products = [
  {
    name: "2.5 KG LPG Iron Press",
    mileage: "16–17 hrs/kg",
    image: "/assets/product-gallery-2-5.png",
    description: "Fast everyday commercial ironing",
  },
  {
    name: "3.5 KG LPG Iron Press",
    mileage: "15–16 hrs/kg",
    image: "/assets/product-gallery-3-5.png",
    description: "Balance weight & performance",
  },
  {
    name: "5 KG LPG Iron Press",
    mileage: "14–15 hrs/kg",
    image: "/assets/product-gallery-5.png",
    description: "Heavy duty professional use",
  },
  {
    name: "6 KG LPG Iron Press",
    mileage: "12–14 hrs/kg",
    image: "/assets/product-gallery-6.png",
    description: "High volume ironing",
  },
  {
    name: "7 KG LPG Iron Press",
    mileage: "12–14 hrs/kg",
    image: "/assets/product-gallery-7.png",
    description: "Maximum pressing weight.",
  },
];

export function Products() {
  return (
    <section id="models" className="bg-surface px-5 py-16 md:px-10 md:py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-base text-accent">Product Gallery</p>
        <h2 className="mt-1 text-[26px] font-semibold text-white md:text-[30px]">
          Pick Your Perfect VARCAS Press
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-[45px]">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[20px] border-2 border-transparent bg-card transition-[transform,border-color,box-shadow] duration-300 ease-out hover:z-10 hover:scale-[1.05] hover:border-[#FF6B00] hover:shadow-[0_0_22px_rgba(255,107,0,0.45)] motion-reduce:transition-none motion-reduce:hover:scale-100"
            >
              <div className="relative aspect-[219/215] w-full bg-black">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 50vw, 220px"
                />
              </div>
              <div className="px-3 py-4 text-center">
                <h3 className="text-[11px] font-bold text-accent md:text-xs">
                  {product.name}
                </h3>
                <p className="mt-1 text-[11px] text-white md:text-xs">
                  {product.mileage}
                </p>
                <p className="mt-1 min-h-[2.4em] text-[11px] text-accent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none md:text-xs">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
