import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/primera-logo.png";

export function Footer() {
  const cols = [
    { title: "About Us", links: [["Who We Are", "/about"], ["Vision & Mission", "/about#vm"], ["Core Values", "/about#values"], ["Leadership", "/about#leadership"], ["Our Journey", "/about#journey"]] as const },
    { title: "What We Do", links: [["Leadership & Managerial", "/services#leadership"], ["Soft Skills", "/services#soft-skills"], ["Sales Capability", "/services#sales"], ["Talent Assessment", "/services#talent"], ["Facilitator Development", "/services#facilitator"]] as const },
    { title: "Products", links: [["CRM ACT", "/products/crm-act"], ["Learning-to-Performance", "/products#l2p"], ["Assessment Tools", "/products#assessment"]] as const },
    { title: "Resources", links: [["Clients & Stories", "/clients"], ["Insights", "/insights"], ["Contact Us", "/contact"]] as const },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-navy text-white">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-gold/5 blur-3xl" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt={SITE.short} className="h-10 w-auto bg-white rounded-md p-1" />
              <div>
                <p className="font-display text-sm tracking-[0.16em] uppercase font-bold">Primera Karya Sinergia</p>
                <p className="text-[10px] tracking-[0.28em] uppercase text-gold font-semibold">Empowering · Elevating</p>
              </div>
            </div>
            <p className="mt-6 text-white/70 text-sm leading-relaxed max-w-sm">
              A business management and people development consulting firm helping organizations grow through their people — since {SITE.founded}.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/75">
              <div className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{SITE.address}</span></div>
              <a href={`mailto:${SITE.email}`} className="flex gap-3 hover:text-gold transition"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />{SITE.email}</a>
              <a href={`tel:${SITE.phone.replace(/\s/g,"")}`} className="flex gap-3 hover:text-gold transition"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />{SITE.phone}</a>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-gold text-navy px-5 py-2.5 text-xs font-semibold hover:bg-white transition">
              Schedule Consultation <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-[12px] tracking-[0.18em] uppercase text-gold font-semibold mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map(([label, to]) => (
                    <li key={label}>
                      <a href={to} className="text-sm text-white/70 hover:text-white hover:translate-x-0.5 inline-block transition">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <p>© 2026 {SITE.name}. All rights reserved.</p>
          <p className="font-serif-italic text-white/70">Empowering People. Elevating Performance.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
