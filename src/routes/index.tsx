import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Users, Target, Compass, Lightbulb, Briefcase, Cpu, CheckCircle2, ExternalLink, Plus, Minus, Phone } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-consulting.jpg";
import impactImg from "@/assets/impact-workshop.jpg";
import crmImg from "@/assets/crm-act-context.jpg";
import programsImg from "@/assets/programs-leadership.jpg";
import { SITE, SERVICES, PROGRAM_CATEGORIES, INDUSTRIES, FAQ, TRUST_STRIP, LEADERSHIP, CREDENTIALS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Primera Karya Sinergia — Empowering People. Elevating Performance." },
      { name: "description", content: "Premium Indonesian people development consulting firm. Leadership, sales, talent assessment, and AI-supported learning that drives measurable business performance." },
      { property: "og:title", content: "Primera Karya Sinergia" },
      { property: "og:description", content: "Empowering People. Elevating Performance." },
    ],
  }),
  component: HomePage,
});

const SERVICE_ICONS = [Users, Lightbulb, Compass, Target, Briefcase, Cpu];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Impact />
      <Programs />
      <CrmAct />
      <Industries />
      <Leadership />
      <Metrics />
      <FaqSection />
      <ContactCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream text-ink flex flex-col">
      {/* TOP PANEL: hero image — fully visible, sharp, never cropped */}
      <div className="relative w-full pt-20 md:pt-24 bg-cream">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full overflow-hidden rounded-2xl border border-line bg-cream"
          >
            <img
              src={heroImg}
              alt="Primera Karya Sinergia leadership team in a strategic boardroom session"
              className="block w-full h-auto object-contain"
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM PANEL: editorial content */}
      <div className="relative bg-cream">
        <div className="container-x relative py-12 md:py-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <SectionLabel gold>Premium People Development · Est. {SITE.founded}</SectionLabel>
            </div>
          </Reveal>

          <div className="mt-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <Reveal delay={0.12} className="lg:col-span-7">
              <h1 className="font-display leading-[0.95] text-balance text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] max-w-[18ch]">
                EMPOWERING <span className="text-gold">PEOPLE.</span>
                <br />
                ELEVATING PERFORMANCE.
              </h1>
            </Reveal>

            <Reveal delay={0.25} className="lg:col-span-5">
              <p className="text-sm md:text-base text-ink/70 leading-relaxed max-w-md">
                {SITE.name} is an Indonesian people-development consulting firm building high-performing leaders, sales talent, and organizations through integrated consulting, learning, coaching, and AI-supported digital solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-3 text-sm font-medium hover:bg-charcoal transition-colors"
                >
                  Schedule Strategic Consultation
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-5 py-3 text-sm text-ink hover:border-ink hover:bg-ink hover:text-cream transition"
                >
                  Explore Programs <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line rounded-xl overflow-hidden border border-line">
              {[
                ["Consulting", "Strategy"],
                ["Learning", "Programs"],
                ["Sales", "Performance"],
                ["Digital", "AI-Ready"],
              ].map(([k, v]) => (
                <div key={k} className="bg-cream px-4 py-3.5 text-center">
                  <p className="font-display text-sm tracking-widest text-ink uppercase">{k}</p>
                  <p className="text-[10px] text-ink/55 uppercase tracking-wider mt-0.5">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-cream py-6 border-y border-line overflow-hidden">
      <div className="flex gap-12 marquee whitespace-nowrap">
        {[...TRUST_STRIP, ...TRUST_STRIP, ...TRUST_STRIP].map((t, i) => (
          <span key={i} className="eyebrow text-ink/60 flex items-center gap-12">
            {t}<span className="h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>Services</SectionLabel>
              <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[0.95]">What we do</h2>
              <p className="mt-6 text-ink/70 leading-relaxed">
                We partner with organizations to design, build, and scale people capabilities that improve leadership, sales performance, collaboration, and business execution.
              </p>
              <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-2.5 text-sm">
                Explore all services <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-line">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[i];
              return (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link to="/services" className="group block bg-cream p-6 lg:p-8 h-full lift hover:bg-white">
                    <div className="flex items-center justify-between">
                      <div className="h-11 w-11 rounded-xl bg-ink text-cream flex items-center justify-center group-hover:bg-gold group-hover:text-ink transition">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-ink/40 group-hover:text-ink group-hover:rotate-12 transition" />
                    </div>
                    <h3 className="mt-6 font-display text-xl tracking-wide uppercase">{s.title}</h3>
                    <p className="mt-3 text-sm text-ink/65 leading-relaxed">{s.body}</p>
                    <span className="mt-5 inline-block text-xs underline underline-offset-4 decoration-ink/30 group-hover:decoration-ink">Learn more</span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const steps = [
    { n: "01", t: "Diagnose", d: "Understand business challenges, people gaps, role needs, and performance targets." },
    { n: "02", t: "Design", d: "Build contextual learning journeys aligned with culture and business goals." },
    { n: "03", t: "Deliver", d: "Facilitate practical, experiential, action-oriented programs." },
    { n: "04", t: "Reinforce", d: "Follow up with coaching, review, and behavior tracking." },
    { n: "05", t: "Measure", d: "Evaluate learning impact up to Level 4 using performance indicators." },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream py-24 md:py-32 grain">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel gold>Method</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[0.95]">How we create impact</h2>
            <p className="mt-6 text-cream/70 max-w-2xl leading-relaxed">
              We connect learning, behavior, execution, and performance into one measurable development journey.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-px">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="group flex gap-6 py-6 border-t border-cream/10 first:border-t hover:bg-cream/[0.03] -mx-4 px-4 transition">
                  <div className="font-display text-gold/80 text-xl w-12">{s.n}</div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl uppercase tracking-wide">{s.t}</h3>
                    <p className="mt-2 text-cream/70 max-w-xl">{s.d}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-cream/40 mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative tilt-3d">
              <div className="overflow-hidden rounded-3xl border border-cream/10">
                <img src={impactImg} alt="Indonesian facilitator leading a workshop" className="w-full h-[520px] object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream text-ink rounded-2xl p-5 max-w-[220px] shadow-2xl">
                <p className="eyebrow text-ink/60">Evaluation</p>
                <p className="font-display text-2xl mt-1">Level 1–4</p>
                <p className="text-xs text-ink/60 mt-1">Reaction → Learning → Behavior → Results</p>
              </div>
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gold/30 blur-2xl float-y" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <SectionLabel>Programs</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[0.95] max-w-3xl">
              Programs built for real business performance
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:text-right">
            <Link to="/programs" className="inline-flex items-center gap-2 rounded-full border border-ink px-5 py-2.5 text-sm hover:bg-ink hover:text-cream transition">
              View all programs <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAM_CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <div className="group relative tilt-3d h-full rounded-2xl bg-white border border-line p-7 lift hover:border-ink/30 overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 bg-gold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition" />
                <p className="eyebrow text-ink/50">Series</p>
                <h3 className="mt-3 font-display text-2xl tracking-wide uppercase leading-tight">{c.title}</h3>
                <p className="mt-3 text-sm text-ink/65 italic">{c.tagline}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/75">
                  {c.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-gold">›</span>{item}</li>
                  ))}
                  <li className="text-xs text-ink/50">+ {c.items.length - 4} more</li>
                </ul>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <Link to="/programs" className="group relative h-full rounded-2xl bg-ink text-cream p-7 flex flex-col justify-between overflow-hidden lift">
              <div>
                <p className="eyebrow text-gold">Catalog</p>
                <h3 className="mt-3 font-display text-3xl uppercase leading-tight">Explore every program</h3>
                <p className="mt-3 text-sm text-cream/70">50+ programs across leadership, sales, soft skills, talent, and facilitator development.</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm">View catalog <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              <img src={programsImg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 group-hover:opacity-30 transition" loading="lazy" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CrmAct() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-cream py-24 md:py-32 grain">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-gold/15 blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel gold>Featured Digital Solution</SectionLabel>
              <h2 className="font-display text-6xl md:text-8xl mt-6 leading-[0.9]">
                CRM <span className="text-gold">ACT</span>
              </h2>
              <p className="mt-4 text-xl md:text-2xl text-cream/80 font-display tracking-wide uppercase">
                AI-Powered Mobile Banking Sales Execution CRM
              </p>
              <p className="mt-6 text-cream/75 leading-relaxed max-w-lg">
                CRM ACT helps banks control sales execution from daily field activity to management decision — powered by ACT methodology, mobile visibility, and governed AI intelligence.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["A", "Action Daily"],
                  ["C", "Control Activity"],
                  ["T", "Track Progress"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-cream/15 bg-cream/[0.04] p-4">
                    <div className="font-display text-3xl text-gold">{k}</div>
                    <p className="text-xs mt-1 text-cream/70 uppercase tracking-wider">{v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-2 text-sm text-cream/80">
                {["Banking-specific sales execution — not a generic contact CRM", "AI recommends, humans approve. RBAC, audit log, masking, SSO-ready", "Demo uses dummy data only"].map((t) => (
                  <p key={t} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />{t}</p>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={SITE.crmDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3.5 text-sm font-medium hover:bg-cream transition"
                >
                  View CRM ACT Demo for Bank BTN <ExternalLink className="h-4 w-4" />
                </a>
                <Link to="/products/crm-act" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm hover:border-cream/70 transition">
                  Learn About CRM ACT <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" search={{ interest: "CRM ACT" } as never} className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm hover:border-cream/70 transition">
                  Discuss Pilot & Security
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-6">
            <DashboardMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  const cards = [
    { t: "Today Action", v: "12 / 18", sub: "Visits scheduled", c: "text-gold" },
    { t: "Pipeline Health", v: "Rp 4.2 B", sub: "Hot · Warm · Cold", c: "text-cream" },
    { t: "Follow-Up Due", v: "7", sub: "Past SLA", c: "text-orange" },
    { t: "Coaching Queue", v: "5 RM", sub: "This week", c: "text-cream" },
  ];
  return (
    <div className="relative tilt-3d">
      <div className="rounded-3xl border border-cream/15 bg-gradient-to-br from-cream/[0.06] to-cream/[0.02] backdrop-blur-md p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow text-gold">Command Center</p>
            <p className="font-display text-xl mt-1">Branch Performance · Today</p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-xl bg-ink/40 border border-cream/10 p-4"
            >
              <p className="text-[10px] uppercase tracking-wider text-cream/50">{c.t}</p>
              <p className={`mt-2 font-display text-2xl ${c.c}`}>{c.v}</p>
              <p className="text-[11px] text-cream/50 mt-0.5">{c.sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-3 rounded-xl bg-ink/40 border border-cream/10 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-wider text-cream/50">Pipeline Movement</p>
            <p className="text-[10px] text-gold">AI Insight</p>
          </div>
          <div className="mt-3 flex gap-1 h-12 items-end">
            {[40, 65, 35, 80, 55, 90, 70, 60, 85, 75, 95, 50].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-gold/30 to-gold" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-3 flex gap-2 flex-wrap">
            {[["Hot", "bg-orange/20 text-orange"], ["Warm", "bg-gold/20 text-gold"], ["Cold", "bg-cream/10 text-cream/60"]].map(([l, c]) => (
              <span key={l} className={`text-[10px] px-2 py-1 rounded-full ${c}`}>{l}</span>
            ))}
          </div>
        </div>

        <div className="mt-3 rounded-xl bg-ink/40 border border-cream/10 p-4 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs">AI</div>
          <div className="flex-1">
            <p className="text-xs text-cream/80">Recommend coaching for 3 RMs in Jakarta-2 region — follow-up SLA below 60%</p>
            <p className="text-[10px] text-cream/50 mt-0.5">Pending leader approval · Dummy data</p>
          </div>
        </div>
      </div>

      {/* Floating phone mock */}
      <div className="absolute -bottom-10 -left-8 hidden md:block">
        <div className="float-y rounded-3xl border border-cream/20 bg-ink p-3 shadow-2xl w-44">
          <div className="rounded-2xl bg-navy/80 p-3">
            <p className="text-[9px] uppercase tracking-wider text-gold">Field App</p>
            <p className="font-display text-sm mt-1 text-cream">Today's Visits</p>
            {["BTN Cabang Sudirman", "BTN KCP Bellezza", "Prospek · PT Sinergi"].map((v) => (
              <div key={v} className="mt-2 rounded-md bg-cream/5 p-2 text-[10px] text-cream/80">{v}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-gold/40 blur-3xl" />

      <div className="mt-6 inline-flex items-center gap-2 text-xs text-cream/50">
        <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
        Illustrative dashboard. Demo uses dummy data only.
      </div>
    </div>
  );
}

function Industries() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <SectionLabel>Industries</SectionLabel>
          <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[0.95] max-w-3xl">
            Built for Indonesian business realities
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-2xl bg-white border border-line p-7 h-full lift hover:border-ink/30">
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
                <div className="h-px w-10 bg-gold mb-6" />
                <h3 className="font-display text-xl uppercase tracking-wide">{ind.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">{ind.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="bg-charcoal text-cream py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel gold>Leadership</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[0.95]">
              Guided by certified practitioners and senior business advisors
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {LEADERSHIP.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05}>
              <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 h-full lift hover:border-gold/40">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/40 flex items-center justify-center font-display text-xl text-gold">
                    {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <p className="eyebrow text-gold/80">{p.role}</p>
                    <p className="font-display text-lg uppercase tracking-wide leading-tight mt-1">{p.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-cream/60 uppercase tracking-wider">{p.credentials}</p>
                <p className="mt-2 text-sm text-cream/75">{p.expertise}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap gap-2">
            {CREDENTIALS.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />{c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Metrics() {
  const m = [
    { v: "50+", l: "Programs across 5 series" },
    { v: "L1–4", l: "Kirkpatrick evaluation" },
    { v: "BFSI", l: "Deep industry expertise" },
    { v: "AI", l: "Supported learning & tools" },
  ];
  return (
    <section className="bg-cream py-20 border-y border-line">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8">
        {m.map((x, i) => (
          <Reveal key={x.l} delay={i * 0.08}>
            <div>
              <p className="font-display text-6xl md:text-7xl text-ink leading-none">{x.v}</p>
              <p className="mt-3 text-sm text-ink/60">{x.l}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[0.95]">Frequently asked questions</h2>
            <p className="mt-6 text-ink/65">Can't find what you're looking for? <Link to="/contact" className="underline underline-offset-4">Talk to us.</Link></p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-5 border-b border-line flex items-start justify-between gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl uppercase tracking-wide">{f.q}</span>
                  <span className="h-8 w-8 rounded-full border border-line flex items-center justify-center shrink-0 group-hover:border-ink transition">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-ink/70 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-cream py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/15 blur-3xl" />
      <div className="container-x relative text-center">
        <Reveal>
          <SectionLabel gold>Let's build people impact</SectionLabel>
          <h2 className="font-display text-6xl md:text-8xl mt-6 leading-[0.9] text-balance">
            Ready to elevate your people?
          </h2>
          <p className="mt-6 text-cream/70 max-w-xl mx-auto">
            Schedule a strategic consultation. We typically respond within two business hours.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3.5 text-sm font-medium hover:bg-cream transition">
              Schedule Consultation <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm hover:border-cream/70 transition">
              <Phone className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
