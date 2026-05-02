import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logo from "@/assets/primera-logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3" aria-label={SITE.name}>
          <img
            src={logo}
            alt={`${SITE.short} logo`}
            className={`h-7 md:h-8 w-auto object-contain transition-[filter] duration-500 ${
              scrolled
                ? ""
                : "[filter:invert(1)_brightness(2)_drop-shadow(0_2px_8px_rgba(0,0,0,0.55))]"
            }`}
          />
          <span
            className={`hidden sm:inline-block font-display tracking-[0.2em] text-[11px] uppercase transition-colors duration-500 ${
              scrolled ? "text-ink/70" : "text-cream/90 [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]"
            }`}
          >
            Primera Karya Sinergia
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-ink/75 hover:text-ink transition-colors relative"
              activeProps={{ className: "text-ink font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink text-cream px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium hover:bg-charcoal transition-colors"
          >
            Schedule Consultation <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-line"
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
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } bg-cream border-b border-line`}
      >
        <div className="container-x py-6 flex flex-col gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="py-3 text-lg font-display tracking-wide text-ink/80 hover:text-ink border-b border-line/60"
              activeProps={{ className: "text-ink" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink text-cream px-5 py-3 text-sm font-medium"
          >
            Schedule Consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
