import { SubpageHero, SubpageCTA } from "./SubpageHero";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export type SubpageSection =
  | { type: "intro"; eyebrow: string; heading: string; body: string[] }
  | { type: "cards"; eyebrow: string; heading: string; intro?: string; cards: { title: string; body: string }[]; cols?: 2 | 3 | 4 }
  | { type: "list"; eyebrow: string; heading: string; intro?: string; items: string[] }
  | { type: "split"; eyebrow: string; heading: string; body: string[]; bullets?: string[] };

export function SubpageTemplate({
  hero,
  sections,
  cta,
}: {
  hero: { eyebrow: string; title: React.ReactNode; subtitle: string; image: string };
  sections: SubpageSection[];
  cta: { title: string; label?: string };
}) {
  return (
    <>
      <SubpageHero {...hero} />
      {sections.map((s, i) => {
        const bg = i % 2 === 0 ? "bg-white" : "bg-soft";
        if (s.type === "intro") {
          return (
            <section key={i} className={`${bg} py-20 md:py-24`}>
              <div className="container-x grid lg:grid-cols-12 gap-10">
                <Reveal className="lg:col-span-5">
                  <SectionLabel gold>{s.eyebrow}</SectionLabel>
                  <h2 className="mt-5 font-display text-3xl md:text-4xl text-navy font-extrabold leading-tight">{s.heading}</h2>
                </Reveal>
                <Reveal delay={0.08} className="lg:col-span-7 space-y-5 text-charcoal leading-relaxed text-base md:text-[17px]">
                  {s.body.map((p, j) => <p key={j}>{p}</p>)}
                </Reveal>
              </div>
            </section>
          );
        }
        if (s.type === "split") {
          return (
            <section key={i} className={`${bg} py-20 md:py-24`}>
              <div className="container-x grid lg:grid-cols-2 gap-12">
                <Reveal>
                  <SectionLabel>{s.eyebrow}</SectionLabel>
                  <h2 className="mt-5 font-display text-3xl md:text-4xl text-navy font-extrabold leading-tight">{s.heading}</h2>
                </Reveal>
                <Reveal delay={0.08} className="space-y-5 text-charcoal leading-relaxed">
                  {s.body.map((p, j) => <p key={j}>{p}</p>)}
                  {s.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-charcoal">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </div>
            </section>
          );
        }
        if (s.type === "list") {
          return (
            <section key={i} className={`${bg} py-20 md:py-24`}>
              <div className="container-x">
                <Reveal>
                  <SectionLabel gold>{s.eyebrow}</SectionLabel>
                  <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold max-w-3xl">{s.heading}</h2>
                  {s.intro && <p className="mt-5 max-w-2xl text-charcoal">{s.intro}</p>}
                </Reveal>
                <ul className="mt-10 grid md:grid-cols-2 gap-3">
                  {s.items.map((it, j) => (
                    <Reveal key={j} delay={j * 0.03}>
                      <li className="flex gap-3 rounded-xl bg-white border border-line p-4">
                        <span className="font-display text-orange font-extrabold text-sm w-7 shrink-0">{String(j + 1).padStart(2, "0")}</span>
                        <span className="text-charcoal text-sm">{it}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </section>
          );
        }
        // cards
        const cols = s.cols ?? 3;
        const colClass = cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
        return (
          <section key={i} className={`${bg} py-20 md:py-24`}>
            <div className="container-x">
              <Reveal>
                <SectionLabel gold>{s.eyebrow}</SectionLabel>
                <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold max-w-3xl">{s.heading}</h2>
                {s.intro && <p className="mt-5 max-w-2xl text-charcoal">{s.intro}</p>}
              </Reveal>
              <div className={`mt-12 grid ${colClass} gap-5`}>
                {s.cards.map((c, j) => (
                  <Reveal key={j} delay={j * 0.05}>
                    <div className="h-full rounded-2xl bg-white border border-line border-t-2 border-t-orange p-7 lift hover:border-orange/40">
                      <div className="font-display text-3xl font-extrabold text-orange">{String(j + 1).padStart(2, "0")}</div>
                      <h3 className="mt-4 font-display text-lg md:text-xl text-navy font-bold">{c.title}</h3>
                      <p className="mt-3 text-sm md:text-[15px] text-charcoal/85 leading-relaxed">{c.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
      <SubpageCTA title={cta.title} label={cta.label ?? "Schedule Consultation"} />
    </>
  );
}
