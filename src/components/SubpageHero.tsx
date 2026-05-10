import { Reveal } from "./Reveal";

export function SubpageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative w-full min-h-[58vh] md:min-h-[68vh] flex items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-navy/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

      <div className="relative container-x pt-32 pb-16 md:pt-40 md:pb-24 text-white">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] font-bold text-gold">
            <span className="h-px w-8 bg-orange" /> {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function SubpageCTA({ title, body, to = "/contact", label = "Schedule Consultation" }: {
  title: string; body?: string; to?: string; label?: string;
}) {
  return (
    <section className="bg-navy text-white py-20 md:py-24">
      <div className="container-x text-center max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight">{title}</h2>
          {body && <p className="mt-5 text-white/80 text-base md:text-lg">{body}</p>}
          <a href={to} className="mt-9 inline-flex items-center gap-2 rounded-full bg-orange text-white px-7 py-4 text-sm font-bold hover:bg-orange/90 transition shadow-lg shadow-orange/25">
            {label} →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
