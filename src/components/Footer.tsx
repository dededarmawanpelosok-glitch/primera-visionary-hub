import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/primera-logo.png";

export function Footer() {
  const cols = [
    { title: "Company", links: [["About", "/about"], ["Impact", "/impact"], ["Insights", "/insights"], ["Contact", "/contact"]] as const },
    { title: "Services", links: [["Recruitment & Assessment", "/services"], ["Training & Workshop", "/services"], ["Leadership Development", "/services"], ["Sales Capability", "/services"], ["Digital & AI Enablement", "/services"]] as const },
    { title: "Programs", links: [["Leadership & Managerial", "/programs"], ["Soft Skill & Behavioral", "/programs"], ["Technical & Sales", "/programs"], ["Talent Assessment", "/programs"], ["Facilitator & Digital", "/programs"]] as const },
    { title: "Products", links: [["CRM ACT", "/products/crm-act"], ["All Products", "/products"]] as const },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-ink text-cream">
      {/* Gold glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[80%] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4">
            <img src={logo} alt={SITE.short} className="h-9 invert mb-6" />
            <p className="font-serif-italic text-2xl text-cream/90 leading-snug max-w-sm">
              Empowering People. Elevating Performance.
            </p>
            <div className="mt-8 space-y-3 text-sm text-cream/70">
              <div className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>{SITE.address}</span></div>
              <a href={`mailto:${SITE.email}`} className="flex gap-3 hover:text-gold transition"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />{SITE.email}</a>
              <a href={`tel:${SITE.phone.replace(/\s/g,"")}`} className="flex gap-3 hover:text-gold transition"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />{SITE.phone}</a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="eyebrow text-gold/90 mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map(([label, to]) => (
                    <li key={label}>
                      <Link to={to} className="text-sm text-cream/75 hover:text-cream transition">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-line my-12 opacity-60" />

        <div className="text-center py-4">
          <p className="font-serif-italic text-2xl md:text-3xl text-cream/90 text-balance">
            Empowering People. Elevating Performance.
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© 2026 {SITE.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-cream">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
