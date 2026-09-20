import Link from "next/link";

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  notice?: string;
  items?: string[];
  sections?: LegalSection[];
  relatedHref: string;
  relatedLabel: string;
};

export function LegalPage({
  eyebrow,
  title,
  description,
  notice,
  items,
  sections,
  relatedHref,
  relatedLabel,
}: LegalPageProps) {
  return (
    <main className="overflow-x-hidden bg-background">
      <section className="bg-gradient-to-b from-surface to-background px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:px-20 lg:pb-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-base text-accent">{eyebrow}</p>
          <div className="mt-1 flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between">
            <h1 className="max-w-3xl text-[26px] font-semibold text-white md:text-[30px] lg:text-[36px]">
              {title}
            </h1>
            <p className="max-w-md text-sm text-white/80 xl:text-right xl:text-base">
              {description}
            </p>
          </div>

          <article className="mt-8 rounded-[24px] bg-card p-5 md:mt-10 md:rounded-[30px] md:p-10 lg:p-12">
            {notice ? (
              <p className="rounded-[15px] border border-accent/40 bg-accent/10 px-4 py-3 text-sm leading-relaxed font-medium text-white md:text-base">
                {notice}
              </p>
            ) : null}

            {items?.length ? (
              <ul className={notice ? "mt-8 space-y-4" : "space-y-4"}>
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-white/80 md:text-base"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="min-w-0 break-words">{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {sections?.length ? (
              <div
                className={`${notice || items?.length ? "mt-8" : ""} divide-y divide-white/10`}
              >
                {sections.map((section, index) => (
                  <section
                    key={section.title}
                    className="flex gap-4 py-8 first:pt-0 last:pb-0 md:gap-6"
                  >
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white md:size-10 md:text-sm">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-semibold text-white md:text-xl">
                        {section.title}
                      </h2>
                      <div className="mt-3 space-y-4">
                        {section.blocks.map((block, blockIndex) =>
                          block.type === "list" ? (
                            <ul
                              key={`${section.title}-list-${blockIndex}`}
                              className="space-y-2"
                            >
                              {block.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-3 text-sm leading-relaxed text-white/80 md:text-base"
                                >
                                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                                  <span className="min-w-0 break-words">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p
                              key={`${section.title}-p-${blockIndex}`}
                              className="text-sm leading-relaxed break-words text-white/80 md:text-base"
                            >
                              {block.text}
                            </p>
                          ),
                        )}
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            ) : null}
          </article>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="text-sm text-white/70 transition hover:text-accent"
            >
              ← Back to home
            </Link>
            <Link
              href={relatedHref}
              className="text-sm text-accent transition hover:brightness-110"
            >
              {relatedLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
