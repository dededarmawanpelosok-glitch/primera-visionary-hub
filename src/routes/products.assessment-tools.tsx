import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/prod-assessment.jpg";

export const Route = createFileRoute("/products/assessment-tools")({
  head: () => ({ meta: [
    { title: "Assessment Tools — Primera Karya Sinergia" },
    { name: "description", content: "Assessment tools for clearer talent, capability, and development decisions." },
    { property: "og:title", content: "Assessment Tools — Primera" },
    { property: "og:description", content: "Capability assessment, competency mapping, and leadership readiness." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Assessment Tools",
        title: <>Assessment tools for clearer <span className="italic font-serif-italic font-normal text-gold">talent, capability, and development decisions.</span></>,
        subtitle: "Primera's assessment toolkit helps HR, L&D, and business leaders make objective, defensible decisions about who to hire, develop, and promote.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why It Matters", heading: "Better people decisions start with better data.",
          body: [
            "Subjective people decisions are expensive — they create wrong hires, unclear succession, and stalled careers. Validated assessment tools give leaders structured insight into capability, behavior, and readiness.",
            "Primera curates and customizes assessment tools that match the realities of Indonesian organizations — from sales force mapping to leadership succession.",
          ]},
        { type: "cards", eyebrow: "Tool Categories", heading: "Comprehensive assessment toolkit.", cols: 3,
          cards: [
            { title: "Competency Assessment", body: "Role-based competency models scored against validated rubrics." },
            { title: "Recruitment Support", body: "Structured selection assessments aligned with hiring profiles." },
            { title: "DISC & MBTI", body: "Style and personality tools for self-awareness and team development." },
            { title: "Readiness Mapping", body: "Promotion and successor readiness evaluation across leadership layers." },
            { title: "Leadership Potential", body: "High-potential identification using behavioral and cognitive signals." },
            { title: "Sales Aptitude", body: "Sales-specific assessments for selection and capability mapping." },
          ]},
        { type: "list", eyebrow: "Use Cases", heading: "Where assessment tools deliver value.",
          items: [
            "Branch manager succession panel",
            "Sales force capability map",
            "High-potential program selection",
            "Leadership development baseline",
            "Post-merger integration assessment",
            "Annual talent review preparation",
          ]},
        { type: "split", eyebrow: "Outcomes", heading: "More objective people decisions.",
          body: [
            "Assessment is never used in isolation — it complements interviews, references, and business judgment.",
            "Used well, assessment tools reduce bias, accelerate decision-making, and create a defensible record for audit and governance.",
          ],
          bullets: [
            "Lower hiring and promotion regret",
            "Faster talent decisions with stronger evidence",
            "Better internal mobility and development conversations",
            "Stronger governance around people decisions",
          ]},
      ]}
      cta={{ title: "Explore Assessment Tools" }}
    />
  );
}
