import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/svc-talent.jpg";

export const Route = createFileRoute("/services/talent-assessment")({
  head: () => ({ meta: [
    { title: "Talent Assessment — Primera Karya Sinergia" },
    { name: "description", content: "Talent assessment and recruitment excellence for better people decisions." },
    { property: "og:title", content: "Talent Assessment — Primera" },
    { property: "og:description", content: "Structured selection, competency mapping, and succession readiness." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Talent Assessment",
        title: <>Talent assessment and recruitment excellence for <span className="italic font-serif-italic font-normal text-gold">better people decisions.</span></>,
        subtitle: "Primera helps organizations select, map, and develop the right people — through structured assessment, behavioral interviewing, and analytics-backed talent decisions.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why It Matters", heading: "Wrong hires and unclear talent maps quietly cost the business.",
          body: [
            "The cost of a wrong leadership hire or a misaligned promotion compounds over years — in attrition, missed targets, and culture damage.",
            "Primera supports better people decisions through structured assessment methodologies, validated tools, and behavioral interviewing techniques used by experienced HR practitioners.",
          ]},
        { type: "cards", eyebrow: "Capability Areas", heading: "Comprehensive talent assessment services.", cols: 3,
          cards: [
            { title: "Structured Selection", body: "Hiring frameworks, scoring rubrics, and decision discipline for high-stakes recruitment." },
            { title: "Behavioral Interviewing", body: "Train-the-interviewer programs to elevate hiring quality and consistency." },
            { title: "Competency Mapping", body: "Role-based competency frameworks aligned with business strategy." },
            { title: "DISC & MBTI", body: "Validated personality and style tools for self-awareness and team dynamics." },
            { title: "Succession Readiness", body: "Identify, assess, and develop the next layer of leadership." },
            { title: "Talent Analytics", body: "People data interpreted into actionable talent and capability insights." },
          ]},
        { type: "list", eyebrow: "Use Cases", heading: "Where talent assessment changes outcomes.",
          items: [
            "Senior leadership hiring and onboarding",
            "Branch manager and RM selection in BFSI",
            "Sales force capability mapping",
            "High-potential identification programs",
            "Succession planning and readiness",
            "Post-merger talent integration",
          ]},
        { type: "split", eyebrow: "Outcomes", heading: "Better hires. Stronger pipeline. Lower regret.",
          body: [
            "Clients use Primera's assessment work to reduce hiring risk, accelerate readiness mapping, and build defensible succession decisions.",
            "Every assessment design is validated against role profile and business context — not generic templates.",
          ],
          bullets: [
            "Higher hiring success rate at senior level",
            "Better fit between role and incumbent",
            "Clearer succession readiness picture",
            "More objective, defensible people decisions",
          ]},
      ]}
      cta={{ title: "Discuss Talent Assessment" }}
    />
  );
}
