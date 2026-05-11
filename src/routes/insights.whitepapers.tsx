import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/ins-whitepapers.jpg";

export const Route = createFileRoute("/insights/whitepapers")({
  head: () => ({ meta: [
    { title: "Whitepapers — Primera Karya Sinergia" },
    { name: "description", content: "Executive whitepapers for learning, talent, and business performance." },
    { property: "og:title", content: "Whitepapers — Primera" },
    { property: "og:description", content: "Research-based guides for senior leaders and HRD." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Whitepapers",
        title: <>Executive whitepapers for <span className="italic font-serif-italic font-normal text-gold">learning, talent, and business performance.</span></>,
        subtitle: "Deeper, structured documents written for senior leaders, HRD heads, and capability sponsors who need a defensible point of view.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why Whitepapers", heading: "Strategic decisions deserve structured thinking.",
          body: [
            "Articles inform. Whitepapers help leadership teams decide. Primera whitepapers go deeper — combining frameworks, benchmarks, and practitioner perspective on critical capability questions.",
            "Each whitepaper is written for a specific decision context: a new program design, a board briefing, a capability investment review.",
          ]},
        { type: "cards", eyebrow: "Whitepaper Themes", heading: "Where senior leaders need depth.", cols: 3,
          cards: [
            { title: "Leadership Capability Roadmap", body: "Multi-year leadership investment design across organizational layers." },
            { title: "Sales Capability Transformation", body: "End-to-end view of building modern sales capability in BFSI." },
            { title: "Talent & Succession Architecture", body: "Defensible succession design for critical roles." },
            { title: "AI for Financial Advisors", body: "Where AI changes advisor productivity — and where it does not." },
            { title: "Learning Impact Measurement", body: "How L&D earns credibility with the CFO and board." },
            { title: "Branch Productivity Playbook", body: "Capability, execution rhythm, and supervisory quality at branch level." },
          ]},
        { type: "list", eyebrow: "Audience", heading: "Designed for the people making capability decisions.",
          items: [
            "Board members and senior executives",
            "HR Directors and Chief People Officers",
            "Heads of Learning & Development",
            "Heads of Sales and Distribution",
            "Heads of Talent & Succession",
            "Capability investment sponsors",
          ]},
        { type: "split", eyebrow: "Access", heading: "Available on request — under professional discretion.",
          body: [
            "Whitepapers are shared on request, typically following an introductory conversation. This ensures we provide the most relevant material for your context.",
            "Custom whitepapers and benchmark briefings can also be commissioned for specific organizational decisions.",
          ],
          bullets: [
            "Request access via the contact form",
            "Tailored briefings on request",
            "Confidentiality respected on shared content",
            "Custom commission available",
          ]},
      ]}
      cta={{ title: "Request Whitepaper", label: "Talk to Us" }}
    />
  );
}
