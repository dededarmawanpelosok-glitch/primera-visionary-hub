export function SectionLabel({ children, gold = false }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-8 ${gold ? "bg-gold" : "bg-current opacity-40"}`} />
      <span className={`eyebrow ${gold ? "text-gold" : ""}`}>{children}</span>
    </div>
  );
}
