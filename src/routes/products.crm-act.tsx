import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Shield, Smartphone, Building2, Brain, Activity, GitBranch, Lock } from "lucide-react";
import crmImg from "@/assets/crm-act-context.jpg";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/products/crm-act")({
  head: () => ({
    meta: [
      { title: "CRM ACT — AI-Powered Banking Sales Execution CRM" },
      { name: "description", content: "CRM ACT helps Indonesian banks control sales execution from field activity to management dashboard. Mobile-first, governed AI, RBAC, audit-ready." },
      { property: "og:title", content: "CRM ACT — Banking Sales Execution" },
      { property: "og:description", content: "Action Daily. Control Activity. Track Progress." },
    ],
  }),
  component: CrmActPage,
});

function CrmActPage() {
  const pillars = [
    { i: Building2, t: "Banking-Specific", d: "Built for retail, wealth, and bancassurance — not a generic contact CRM." },
    { i: Smartphone, t: "Mobile Visibility", d: "Field officers log activity in seconds; leaders see it in real time." },
    { i: Activity, t: "Leader Command Center", d: "Role-based views from branch to region to executive." },
    { i: Brain, t: "Governed AI", d: "AI recommends next best action — humans approve, decisions are logged." },
    { i: GitBranch, t: "Follow-Up Engine", d: "No follow-up depends on memory. SLAs, nudges, and accountability built in." },
    { i: Lock, t: "Enterprise Governance", d: "RBAC, audit log, data masking, SSO readiness, phased adoption." },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-cream pt-24 pb-20 md:pt-32 grain">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-gold/15 blur-3xl" />
        <div className="container-x relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel gold>Featured Digital Solution</SectionLabel>
              <h1 className="font-display text-7xl md:text-[8.5rem] mt-6 leading-[0.88]">
                CRM <span className="text-gold">ACT</span>
              </h1>
              <p className="mt-4 font-display text-2xl md:text-3xl uppercase tracking-wide text-cream/85">
                Control Sales Execution. Anywhere. Anytime.
              </p>
              <p className="mt-6 max-w-2xl text-cream/75 leading-relaxed">
                AI-powered mobile banking sales execution CRM that helps banks control daily activity, pipeline movement, follow-up discipline, coaching, and performance action — from field officers to executive management.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={SITE.crmDemoUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3.5 text-sm font-medium hover:bg-cream transition">
                  View Bank BTN Demo <ExternalLink className="h-4 w-4" />
                </a>
                <Link to="/contact" search={{ interest: "CRM ACT" } as never} className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm hover:border-cream/70 transition">
                  Schedule Discovery <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative tilt-3d">
              <div className="overflow-hidden rounded-3xl border border-cream/15">
                <img src={crmImg} alt="Indonesian banking team using CRM dashboard" className="w-full h-[440px] object-cover" loading="lazy" />
              </div>
              <div className="absolute -top-5 -right-5 h-28 w-28 rounded-full bg-gold/40 blur-3xl float-y" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-6 leading-tight">
              Banks have data — but do they have execution visibility?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ul className="space-y-4">
              {[
                "Field activity is not visible in real time.",
                "Pipeline looks big but does not move.",
                "Follow-up depends on individual memory.",
                "Coaching is based on assumptions.",
                "Dashboards report numbers but do not drive action.",
                "AI can be risky when uncontrolled.",
              ].map((p) => (
                <li key={p} className="flex gap-3 border-b border-line pb-4">
                  <span className="text-orange font-display text-xl mt-0.5">×</span>
                  <span className="text-ink/75">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-cream py-24">
        <div className="container-x">
          <Reveal>
            <SectionLabel gold>The Solution</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl mt-6 leading-[0.95] max-w-4xl">
              One execution system from field to boardroom.
            </h2>
            <p className="mt-6 max-w-2xl text-cream/75">
              CRM ACT connects activity, pipeline, follow-up, coaching, KPIs, and management dashboards in one banking execution system.
            </p>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-2xl overflow-hidden">
            {[["A", "Action Daily", "Daily action discipline replaces reactive selling."], ["C", "Control Activity", "Every visit, call, and follow-up tracked transparently."], ["T", "Track Progress", "Pipeline, performance, and coaching tracked in one place."]].map(([k, t, d]) => (
              <div key={k as string} className="bg-ink p-8">
                <div className="font-display text-7xl text-gold leading-none">{k}</div>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-wide">{t}</h3>
                <p className="mt-3 text-cream/70 text-sm">{d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.i;
              return (
                <Reveal key={p.t} delay={i * 0.05}>
                  <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 h-full lift hover:border-gold/40">
                    <div className="h-11 w-11 rounded-xl bg-gold/15 text-gold flex items-center justify-center"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-5 font-display text-lg uppercase tracking-wide">{p.t}</h3>
                    <p className="mt-2 text-sm text-cream/70">{p.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Governance</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mt-6">Built for enterprise trust</h2>
            <Shield className="mt-8 h-16 w-16 text-gold" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <ul className="space-y-4">
              {[
                "Demo uses dummy data only.",
                "AI recommends — does not replace — human judgment.",
                "Human approval required for every recommendation.",
                "RBAC, audit log, data masking, SSO readiness.",
                "Phased adoption: Discovery → Prototype → Pilot → MVP → Rollout.",
              ].map((g) => (
                <li key={g} className="flex gap-3 border-b border-line pb-4">
                  <span className="text-gold mt-0.5">✓</span>
                  <span className="text-ink/75">{g}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-cream py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-gold/15 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl">Ready to control execution?</h2>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a href={SITE.crmDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3.5 text-sm font-medium hover:bg-cream transition">
                View CRM ACT Demo for Bank BTN <ExternalLink className="h-4 w-4" />
              </a>
              <Link to="/contact" search={{ interest: "CRM ACT" } as never} className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm hover:border-cream/70 transition">
                Schedule Discovery
              </Link>
              <Link to="/contact" search={{ interest: "CRM ACT" } as never} className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm hover:border-cream/70 transition">
                Discuss Security & Pilot
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
