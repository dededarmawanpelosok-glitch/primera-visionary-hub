import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/svc-facilitator.jpg";

export const Route = createFileRoute("/services/facilitator-digital-learning")({
  head: () => ({ meta: [
    { title: "Facilitator & Digital Learning — Primera Karya Sinergia" },
    { name: "description", content: "Modern facilitation and digital learning for high-impact learning experiences." },
    { property: "og:title", content: "Facilitator & Digital Learning — Primera" },
    { property: "og:description", content: "Train-the-trainer, facilitation mastery, and AI-enabled learning design." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Facilitator & Digital Learning",
        title: <>Modern facilitation and digital learning for <span className="italic font-serif-italic font-normal text-gold">high-impact learning experiences.</span></>,
        subtitle: "Primera develops internal facilitators and learning teams who can design, deliver, and measure learning that actually changes behavior — across in-person, virtual, and AI-enabled formats.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why It Matters", heading: "Internal facilitators are now strategic capability multipliers.",
          body: [
            "When organizations build strong internal facilitators, learning scales without diluting quality. Programs become more contextual, more frequent, and more cost-efficient.",
            "Primera helps L&D teams and internal trainers master facilitation craft, experiential design, and digital delivery — supported by modern AI tools.",
          ]},
        { type: "cards", eyebrow: "Capability Areas", heading: "End-to-end facilitator and digital learning capability.", cols: 3,
          cards: [
            { title: "Train the Trainer", body: "Foundational and advanced facilitator development for internal trainers." },
            { title: "Facilitation Mastery", body: "Advanced techniques in engagement, group dynamics, and adult learning." },
            { title: "Experiential Design", body: "Learning journeys built around case, simulation, and reflection." },
            { title: "AI-Powered Facilitation", body: "Practical AI tools to accelerate prep, content creation, and personalization." },
            { title: "Digital Learning Tools", body: "Virtual platforms, micro-learning, and blended journey design." },
            { title: "Data-Driven Evaluation", body: "L1–L4 measurement frameworks and dashboards for learning impact." },
          ]},
        { type: "list", eyebrow: "Who It Is For", heading: "Designed for learning ecosystems.",
          items: [
            "Corporate L&D and HRD teams",
            "Internal subject-matter trainers",
            "Sales academy and product trainers",
            "Branch and operations training teams",
            "Leadership facilitators and coaches",
            "External professional facilitators",
          ]},
        { type: "split", eyebrow: "Outcomes", heading: "Stronger facilitators. Better learning. Real behavior change.",
          body: [
            "Internal facilitators become more confident, more impactful, and more measurable — which lifts the entire learning function.",
            "Programs include digital tooling that helps facilitators spend less time on slides and more time on people and outcomes.",
          ],
          bullets: [
            "Higher participant engagement scores",
            "Higher learning transfer to the workplace",
            "Faster content development cycles",
            "Lower vendor dependency over time",
          ]},
      ]}
      cta={{ title: "Discuss Facilitator Development" }}
    />
  );
}
