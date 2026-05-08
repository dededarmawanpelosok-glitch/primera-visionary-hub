import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logo from "@/assets/primera-logo.png";

const SUBMENUS: Record<string, { label: string; to: string; desc?: string }[]> = {
  "/about": [
    { label: "Who We Are", to: "/about#who" },
    { label: "Vision & Mission", to: "/about#vm" },
    { label: "Core Values", to: "/about#values" },
    { label: "Our Approach", to: "/about#approach" },
    { label: "Leadership & Facilitators", to: "/about#leadership" },
  ],
  "/services": [
    { label: "Leadership & Managerial", to: "/services#leadership" },
    { label: "Soft Skills & Behavioral", to: "/services#soft-skills" },
    { label: "Technical & Sales Capability", to: "/services#sales" },
    { label: "Talent Assessment & Recruitment", to: "/services#talent" },
    { label: "Facilitator & Digital Learning", to: "/services#facilitator" },
    { label: "Business Consulting & Advisory", to: "/services#consulting" },
  ],
  "/products": [
    { label: "CRM ACT", to: "/products/crm-act", desc: "AI-powered banking sales execution" },
    { label: "Learning-to-Performance Tools", to: "/products#l2p" },
    { label: "Assessment & Evaluation Tools", to: "/products#assessment" },
  ],
  "/clients": [
    { label: "Our Partners", to: "/clients#partners" },
    { label: "Industries We Serve", to: "/clients#industries" },
    { label: "Success Stories", to: "/clients#stories" },
    { label: "Learning Impact", to: "/clients#impact" },
  ],
  "/insights": [
    { label: "Articles", to: "/insights#articles" },
    { label: "Whitepapers", to: "/insights#whitepapers" },
    { label: "Webinars", to: "/insights#webinars" },
    { label: "News", to: "/insights#news" },
  ],
};

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setHover(null); }, [loc.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-line shadow-[0_2px_24px_-12px_rgba(10,22,40,0.18)]" : "bg-transparent"
      }`}
      onMouseLeave={() => setHover(null)}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label={SITE.name}>
          <img src={logo} alt={`${SITE.short} logo`} className="h-8 md:h-10 w-auto object-contain" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[13px] tracking-[0.16em] uppercase text-navy font-bold">Primera Karya Sinergia</span>
            <span className="text-[9px] tracking-[0.28em] uppercase text-gold font-semibold">Empowering · Elevating</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center" aria-label="Primary">
          {NAV.map((n) => {
            const sub = SUBMENUS[n.to];
            return (
              <div key={n.to} className="relative" onMouseEnter={() => setHover(n.to)}>
                <Link
                  to={n.to}
                  className="px-3.5 py-2 text-[13px] font-medium text-navy/85 hover:text-navy transition-colors gold-underline"
                  activeProps={{ className: "text-navy font-semibold" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
                {sub && hover === n.to && (
                  <div className="absolute top-full left-0 pt-3 w-72 z-50">
                    <div className="rounded-xl bg-white border border-line shadow-2xl p-2">
                      {sub.map((s) => (
                        <a key={s.to} href={s.to} className="block px-3 py-2.5 rounded-lg hover:bg-soft transition group">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-navy">{s.label}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-gold opacity-0 group-hover:opacity-100 transition" />
                          </div>
                          {s.desc && <p className="text-[11px] text-navy/55 mt-0.5">{s.desc}</p>}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy hover:border-gold hover:text-gold transition"
            aria-label="WhatsApp"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-navy to-charcoal text-white px-4 md:px-5 py-2.5 text-xs md:text-[13px] font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all border border-gold/30"
          >
            Schedule Strategic Consultation <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-line text-navy"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-b border-line`}
      >
        <div className="container-x py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="py-3 text-base font-display tracking-wide text-navy/85 hover:text-navy border-b border-line/60"
              activeProps={{ className: "text-navy font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link to="/contact" className="inline-flex items-center justify-center gap-1.5 rounded-full bg-navy text-white px-5 py-3 text-xs font-semibold">
              Consultation <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full border border-navy/30 text-navy px-5 py-3 text-xs font-semibold">
              <Phone className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
