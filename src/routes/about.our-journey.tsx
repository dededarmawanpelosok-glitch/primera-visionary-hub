import { createFileRoute } from "@tanstack/react-router";
import { SubpageHero, SubpageCTA } from "@/components/SubpageHero";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import hero from "@/assets/contact-meeting.jpg";

export const Route = createFileRoute("/about/our-journey")({
  head: () => ({
    meta: [
      { title: "Our Journey — Primera Karya Sinergia" },
      { name: "description", content: "Since 2021, Primera has grown alongside organizations through practical learning and trusted partnerships." },
      { property: "og:title", content: "Our Journey — Primera" },
      { property: "og:description", content: "Growing with organizations through practical learning and trusted partnerships." },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  const milestones = [
    ["2021", "Primera Established", "Founded with a focus on people development and business management consulting."],
    ["2022", "Financial & Insurance Foundation", "Rooted in BFSI, financial planning, insurance advisory, and sales capability."],
    ["2023", "Program Expansion", "Leadership, soft skills, sales, talent assessment, and facilitator development series."],
    ["2024", "Digital Learning & AI Readiness", "Integration of practical AI tools, productivity workflows, and CRM ACT."],
    ["2025+", "Future Direction", "Measurable learning impact and strategic partnership for Indonesian enterprises."],
  ];
  return (
    <>
      <SubpageHero
        eyebrow="Our Journey"
        title={<>Growing with organizations through <span className="italic font-serif-italic font-normal text-gold">practical learning and trusted partnerships.</span></>}
        subtitle="Since 2021, Primera has supported organizations in developing leaders, sales professionals, facilitators, and future-ready talents through relevant programs and strategic learning experiences."
        image={hero}
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <Reveal>
            <SectionLabel>Our Beginning</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-4xl text-navy font-extrabold leading-tight">Founded in 2021 — rooted in financial and insurance sectors.</h2>
            <p className="mt-5 text-charcoal leading-relaxed">Primera began with a focused mission: bring practitioner-led capability development to Indonesia's most demanding financial industries. From day one, every program was designed to translate learning into measurable performance.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionLabel>Expanding Expertise</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-4xl text-navy font-extrabold leading-tight">From BFSI roots to enterprise-wide capability.</h2>
            <p className="mt-5 text-charcoal leading-relaxed">Today our work spans leadership, sales productivity, talent assessment, consulting, facilitator enablement, and digital learning — across banking, insurance, telecom, SOE, manufacturing, and FMCG.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-soft py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>Learning Culture</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold max-w-4xl leading-tight">When learning becomes part of culture, growth becomes a way of life.</h2>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel>Journey Timeline</SectionLabel>
            <h2 className="mt-5 font-display text-3xl md:text-5xl text-navy font-extrabold">Milestones along the way.</h2>
          </Reveal>
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-orange/30" aria-hidden />
            <ol className="space-y-8">
              {milestones.map(([year, t, d], i) => (
                <Reveal key={year} delay={i * 0.06}>
                  <li className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className="md:text-right pl-12 md:pl-0 md:pr-12">
                      <div className="font-display text-4xl md:text-5xl font-extrabold text-orange">{year}</div>
                    </div>
                    <div className="pl-12 md:pl-12">
                      <h3 className="font-display text-xl text-navy font-bold">{t}</h3>
                      <p className="mt-2 text-charcoal leading-relaxed">{d}</p>
                    </div>
                    <span className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 h-3 w-3 rounded-full bg-orange ring-4 ring-white" />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <SubpageCTA title="Start Your Organization's Next Growth Chapter" label="Schedule Consultation" />
    </>
  );
}
