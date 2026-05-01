import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Primera Karya Sinergia" },
      { name: "description", content: "Digital products from Primera, including CRM ACT — an AI-powered banking sales execution CRM." },
      { property: "og:title", content: "Primera Products" },
      { property: "og:description", content: "Digital solutions built for measurable execution." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="bg-cream pt-24 pb-16">
        <div className="container-x">
          <Reveal>
            <SectionLabel>Products</SectionLabel>
            <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.9] max-w-4xl text-balance">
              Digital solutions built for execution
            </h1>
            <p className="mt-8 max-w-2xl text-ink/70 leading-relaxed">
              Primera develops focused digital products that turn strategy into daily action — starting with sales execution for Indonesian banking.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream pb-24">
        <div className="container-x">
          <Reveal>
            <Link to="/products/crm-act" className="group block rounded-3xl bg-navy text-cream p-10 md:p-14 relative overflow-hidden lift">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
              <div className="relative grid md:grid-cols-12 gap-8 items-end">
                <div className="md:col-span-8">
                  <SectionLabel gold>Featured</SectionLabel>
                  <h2 className="mt-6 font-display text-6xl md:text-8xl leading-[0.9]">CRM <span className="text-gold">ACT</span></h2>
                  <p className="mt-4 font-display text-xl md:text-2xl uppercase tracking-wide text-cream/85">AI-Powered Mobile Banking Sales Execution CRM</p>
                  <p className="mt-6 max-w-2xl text-cream/75">Control sales execution from daily field activity to executive dashboard — Action Daily · Control Activity · Track Progress.</p>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-5 py-3 text-sm font-medium">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Reveal>
              <a href={SITE.crmDemoUrl} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-line bg-white p-8 lift">
                <div className="eyebrow text-ink/60">Live Demo</div>
                <h3 className="mt-3 font-display text-2xl uppercase tracking-wide">CRM ACT for Bank BTN</h3>
                <p className="mt-2 text-ink/65">Experience the full command center — dummy data, governed AI insight.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm">Open demo <ExternalLink className="h-4 w-4" /></span>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <Link to="/contact" search={{ interest: "CRM ACT" } as never} className="block rounded-2xl border border-line bg-white p-8 lift">
                <div className="eyebrow text-ink/60">Enterprise</div>
                <h3 className="mt-3 font-display text-2xl uppercase tracking-wide">Pilot & Security Discussion</h3>
                <p className="mt-2 text-ink/65">RBAC, audit log, masking, SSO readiness, phased adoption.</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm">Talk to us <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
