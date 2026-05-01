import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms — Primera Karya Sinergia" }, { name: "description", content: "Terms of use for the Primera Karya Sinergia website." }] }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="bg-cream py-24 min-h-screen">
      <div className="container-x max-w-3xl">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl mt-6">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-ink/55">Last updated: 1 May 2026</p>
        <div className="mt-10 space-y-6 text-ink/75 leading-relaxed">
          <p>By using this website, you agree to the following terms.</p>
          <h2 className="font-display text-2xl uppercase tracking-wide pt-4">Use of Content</h2>
          <p>All content — including text, images, programs, and product descriptions — is the property of Primera Karya Sinergia and may not be reproduced without permission.</p>
          <h2 className="font-display text-2xl uppercase tracking-wide pt-4">Programs & Services</h2>
          <p>Program details, pricing, and availability are subject to change. Engagements are governed by separate written agreements.</p>
          <h2 className="font-display text-2xl uppercase tracking-wide pt-4">CRM ACT Demo</h2>
          <p>Demo environments use dummy data only. They do not represent any real bank customer information. AI-based recommendations are illustrative and require human approval in any production context.</p>
          <h2 className="font-display text-2xl uppercase tracking-wide pt-4">Liability</h2>
          <p>This website is provided "as is". Primera does not warrant uninterrupted availability and is not liable for indirect or consequential damages from its use.</p>
          <h2 className="font-display text-2xl uppercase tracking-wide pt-4">Governing Law</h2>
          <p>These terms are governed by the laws of the Republic of Indonesia.</p>
        </div>
        <Link to="/" className="mt-12 inline-flex text-sm underline underline-offset-4">← Back home</Link>
      </div>
    </section>
  );
}
