import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/cli-stories.jpg";

export const Route = createFileRoute("/clients/success-stories")({
  head: () => ({ meta: [
    { title: "Success Stories — Primera Karya Sinergia" },
    { name: "description", content: "Success stories designed around measurable business outcomes." },
    { property: "og:title", content: "Success Stories — Primera" },
    { property: "og:description", content: "Outcome-driven engagements across leadership, sales, and capability." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Success Stories",
        title: <>Success stories designed around <span className="italic font-serif-italic font-normal text-gold">measurable business outcomes.</span></>,
        subtitle: "Each Primera engagement is built around a measurable goal — and we share outcomes through structured, confidential success stories with our clients' permission.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Story Framework", heading: "Every story is structured around real change.",
          body: [
            "We don't write testimonials. We document business outcomes — what changed, how it was measured, and what the partner organization continues to gain.",
            "Confidential case studies and reference conversations are arranged on request, with full respect for client confidentiality.",
          ]},
        { type: "cards", eyebrow: "Sample Impact Themes", heading: "Where Primera engagements have delivered impact.", cols: 3,
          cards: [
            { title: "Leadership Capability", body: "Stronger first-line and middle-management leadership behavior across multi-branch organizations." },
            { title: "Sales Productivity", body: "Higher conversion, larger wallet share, and stronger pipeline rigor in BFSI sales teams." },
            { title: "Branch Performance", body: "Improved branch productivity through capability + execution rhythm + supervisory quality." },
            { title: "Talent Readiness", body: "Faster, more defensible promotion and succession decisions at scale." },
            { title: "Facilitator Capability", body: "Internal trainer teams capable of delivering enterprise-wide programs without external dependency." },
            { title: "Digital Adoption", body: "Practical AI and CRM tool adoption among advisor and frontline teams." },
          ]},
        { type: "split", eyebrow: "Before and After", heading: "From symptom to structural improvement.",
          body: [
            "Engagements typically begin with a clear performance symptom — sales decline, leadership turnover, weak branch productivity, or stalled succession pipeline.",
            "Primera diagnoses, designs, delivers, and measures — leaving the organization with both improved metrics and stronger internal capability.",
          ],
          bullets: [
            "Diagnostic-led engagement design",
            "Clear before/after performance baseline",
            "Manager-owned application and follow-up",
            "Confidential outcome documentation",
          ]},
        { type: "list", eyebrow: "Confidentiality Policy", heading: "Discreet by default. Detailed on request.",
          items: [
            "No public sharing of client names without permission",
            "Confidential case briefings under NDA",
            "Reference calls coordinated with client contacts",
            "Industry-anonymized examples for first conversations",
            "Detailed outcomes shared during scoping",
            "Long-term partner trust prioritized over marketing optics",
          ]},
      ]}
      cta={{ title: "Request Case Studies", label: "Talk to Us" }}
    />
  );
}
