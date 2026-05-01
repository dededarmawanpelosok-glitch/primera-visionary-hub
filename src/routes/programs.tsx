import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PROGRAM_CATEGORIES } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Primera Karya Sinergia" },
      { name: "description", content: "50+ programs across leadership, soft skills, sales capability, talent assessment, and facilitator development — built for Indonesian enterprises." },
      { property: "og:title", content: "Primera Programs" },
      { property: "og:description", content: "Programs built for real business performance." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? PROGRAM_CATEGORIES : PROGRAM_CATEGORIES.filter((c) => c.slug === active);

  return (
    <>
      <section className="bg-cream pt-24 pb-12">
        <div className="container-x">
          <Reveal>
            <SectionLabel>Programs</SectionLabel>
            <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.9] max-w-4xl text-balance">
              50+ programs. Five practice areas. One outcome.
            </h1>
            <p className="mt-8 max-w-2xl text-ink/70 leading-relaxed">
              Every program is designed around real business challenges and delivered with measurable evaluation up to Level 4.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-2">
            {[{ slug: "all", title: "All" }, ...PROGRAM_CATEGORIES].map((c) => (
              <button
                key={c.slug}
                onClick={() => setActive(c.slug)}
                className={`rounded-full px-4 py-2 text-sm border transition ${active === c.slug ? "bg-ink text-cream border-ink" : "bg-white border-line hover:border-ink/40"}`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream pb-24 space-y-20">
        {visible.map((c) => (
          <div key={c.slug} className="container-x">
            <Reveal>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <div>
                  <SectionLabel gold>Series</SectionLabel>
                  <h2 className="font-display text-4xl md:text-5xl mt-4 uppercase tracking-wide">{c.title}</h2>
                  <p className="mt-3 italic text-ink/65 max-w-2xl">{c.tagline}</p>
                </div>
                <Link to="/contact" className="text-sm underline underline-offset-4">Customize this series →</Link>
              </div>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {c.items.map((item, i) => (
                <Reveal key={item} delay={i * 0.02}>
                  <div className="group rounded-xl border border-line bg-white p-5 h-full lift hover:border-ink/40 flex items-center justify-between gap-3">
                    <span className="font-display text-base uppercase tracking-wide leading-tight">{item}</span>
                    <ArrowRight className="h-4 w-4 text-ink/30 group-hover:text-ink shrink-0" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-ink text-cream py-20">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl">Need a tailored learning journey?</h2>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3.5 text-sm font-medium hover:bg-cream transition">
              Co-design with us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
