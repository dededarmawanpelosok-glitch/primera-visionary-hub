import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/cli-impact.jpg";

export const Route = createFileRoute("/clients/learning-impact")({
  head: () => ({ meta: [
    { title: "Learning Impact — Primera Karya Sinergia" },
    { name: "description", content: "Measurable learning impact through Kirkpatrick Level 1–4." },
    { property: "og:title", content: "Learning Impact — Primera" },
    { property: "og:description", content: "From reaction and learning to behavior and business result." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Learning Impact",
        title: <>Measurable through <span className="italic font-serif-italic font-normal text-gold">Kirkpatrick Level 1–4.</span></>,
        subtitle: "Primera designs every program with measurement built in — from participant reaction through real business outcomes.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why Measurement Matters", heading: "If learning isn't measured, it isn't managed.",
          body: [
            "L&D investment is only credible when paired with measurement. Without data, programs become political rather than strategic.",
            "Primera structures every engagement around the Kirkpatrick framework — extended with our own application and impact reporting tools.",
          ]},
        { type: "cards", eyebrow: "Kirkpatrick Framework", heading: "Four levels. One integrated approach.", cols: 4,
          cards: [
            { title: "L1 Reaction", body: "Participant satisfaction, perceived relevance, and facilitator quality." },
            { title: "L2 Learning", body: "Knowledge gain, skill demonstration, and accreditation where applicable." },
            { title: "L3 Behavior", body: "On-the-job application, supported by manager and coach observation." },
            { title: "L4 Business Impact", body: "Linkage to business KPI movement — sales, productivity, retention, quality." },
          ]},
        { type: "list", eyebrow: "Measurement Tools", heading: "Practical tools that make measurement realistic.",
          items: [
            "Pre/post knowledge and behavior diagnostics",
            "Application action plans tracked over time",
            "Manager observation and coaching forms",
            "Stakeholder 360 feedback for behavior change",
            "Business KPI baseline and tracking",
            "Sponsor-ready impact dashboards",
          ]},
        { type: "split", eyebrow: "Outcomes", heading: "Credibility for L&D. Confidence for sponsors.",
          body: [
            "When programs are measured properly, conversations with sponsors shift from 'how many trained' to 'what changed in the business.'",
            "Primera helps L&D teams own that conversation with confidence — backed by structured, defensible data.",
          ],
          bullets: [
            "Stronger L&D positioning at the leadership table",
            "Better program iteration based on real evidence",
            "Higher continued investment in capability",
            "Clearer link between learning and performance",
          ]},
      ]}
      cta={{ title: "Discuss Learning Impact", label: "Talk to Us" }}
    />
  );
}
