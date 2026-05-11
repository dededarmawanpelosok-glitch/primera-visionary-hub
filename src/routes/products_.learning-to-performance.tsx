import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/prod-l2p.jpg";

export const Route = createFileRoute("/products/learning-to-performance")({
  head: () => ({ meta: [
    { title: "Learning-to-Performance — Primera Karya Sinergia" },
    { name: "description", content: "Tools that connect training with measurable business impact." },
    { property: "og:title", content: "Learning-to-Performance — Primera" },
    { property: "og:description", content: "From training event to business outcome — measured, tracked, sustained." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Learning-to-Performance",
        title: <>Tools that connect training with <span className="italic font-serif-italic font-normal text-gold">measurable business impact.</span></>,
        subtitle: "Primera Learning-to-Performance closes the gap between classroom learning and on-the-job behavior — so every program produces visible business value.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why It Matters", heading: "Most training is forgotten before it becomes performance.",
          body: [
            "Classic training events deliver knowledge, but rarely change behavior. Without follow-up, coaching, and on-the-job application, the typical program loses most of its impact within weeks.",
            "Primera's Learning-to-Performance tools give L&D and business leaders a structured way to track, reinforce, and measure learning beyond the workshop.",
          ]},
        { type: "cards", eyebrow: "Capabilities", heading: "Built for the full learning lifecycle.", cols: 3,
          cards: [
            { title: "L1–L4 Evaluation", body: "Kirkpatrick-aligned measurement from reaction through business impact." },
            { title: "Follow-up Tracking", body: "Structured action plans, application checks, and reinforcement nudges." },
            { title: "Coaching Rhythm", body: "Manager and coach involvement in sustained behavior change." },
            { title: "Application Monitoring", body: "On-the-job evidence of learning being practiced in real work." },
            { title: "Impact Reporting", body: "Dashboards that link program activity to business outcomes." },
            { title: "Stakeholder Visibility", body: "Sponsor-ready summaries that justify continued investment." },
          ]},
        { type: "list", eyebrow: "Use Cases", heading: "Where Learning-to-Performance changes the game.",
          items: [
            "Sales academy with measurable productivity uplift",
            "Leadership program with tracked behavior change",
            "Onboarding journey with ramp-up time measurement",
            "Branch capability program with KPI linkage",
            "Soft skills program with stakeholder feedback loop",
            "Compliance learning with applied behavior evidence",
          ]},
        { type: "split", eyebrow: "Outcomes", heading: "From training event to business outcome.",
          body: [
            "Learning-to-Performance shifts the conversation from 'how many were trained' to 'what changed because of the training.'",
            "It gives L&D a credible seat at the business table — backed by data the CFO and CEO actually care about.",
          ],
          bullets: [
            "Stronger learning ROI conversation with sponsors",
            "Higher application rate post-program",
            "Clearer link between learning and business KPI",
            "Better program iteration based on evidence",
          ]},
      ]}
      cta={{ title: "Explore Learning Impact Tools" }}
    />
  );
}
