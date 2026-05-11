import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/svc-soft-skills.jpg";

export const Route = createFileRoute("/services/soft-skills")({
  head: () => ({ meta: [
    { title: "Soft Skills — Primera Karya Sinergia" },
    { name: "description", content: "Behavioral excellence in communication, collaboration, and emotional intelligence." },
    { property: "og:title", content: "Soft Skills — Primera" },
    { property: "og:description", content: "Behavioral capability for modern professionals." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Soft Skills",
        title: <>Behavioral excellence for professionals who need to <span className="italic font-serif-italic font-normal text-gold">communicate, collaborate, and perform.</span></>,
        subtitle: "Modern roles demand more than technical skill. Primera builds the behavioral muscle that turns capable people into trusted, influential professionals.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why It Matters", heading: "Soft skills are now business-critical capabilities.",
          body: [
            "As work becomes more cross-functional, hybrid, and customer-facing, behavioral capability separates good performers from outstanding ones.",
            "Communication, emotional intelligence, collaboration, and critical thinking are no longer optional — they directly shape execution quality, client trust, and team performance.",
          ]},
        { type: "cards", eyebrow: "Capability Areas", heading: "Core soft skill capability we develop.", cols: 4,
          cards: [
            { title: "Communication", body: "Clarity in written, verbal, and presentation contexts — including difficult conversations." },
            { title: "Emotional Intelligence", body: "Self-awareness, regulation, empathy, and influence in high-pressure environments." },
            { title: "Critical Thinking", body: "Structured problem-solving, analytical reasoning, and decision-making frameworks." },
            { title: "Collaboration", body: "Cross-functional teaming, conflict resolution, and stakeholder alignment." },
          ]},
        { type: "cards", eyebrow: "Who It Is For", heading: "Built for every professional touchpoint.", cols: 3,
          cards: [
            { title: "Frontline Professionals", body: "Customer-facing roles where behavior shapes brand experience." },
            { title: "Project & Account Teams", body: "Cross-functional collaborators delivering through influence, not authority." },
            { title: "High-Potential Talents", body: "Future leaders building the behavioral foundation for advancement." },
          ]},
        { type: "list", eyebrow: "Sample Programs", heading: "Practical programs with measurable behavior outcomes.",
          items: [
            "Effective Business Communication",
            "Presentation & Storytelling for Professionals",
            "Emotional Intelligence at Work",
            "Critical Thinking & Problem Solving",
            "Collaboration in Hybrid Teams",
            "Difficult Conversations & Negotiation",
            "Personal Productivity & Time Management",
            "Service Excellence & Customer Mindset",
          ]},
        { type: "split", eyebrow: "Outcomes", heading: "From skill to behavior to business result.",
          body: [
            "Participants leave with practiced behaviors, not only theory. We use experiential exercises, role-plays, and real workplace scenarios to ensure application.",
            "Programs include reinforcement tools — micro-learning, peer practice, and manager support — so behaviors stick beyond the workshop.",
          ],
          bullets: [
            "Higher quality of internal and external communication",
            "Better collaboration across functions and locations",
            "Stronger personal effectiveness and ownership",
            "Improved customer and stakeholder satisfaction",
          ]},
      ]}
      cta={{ title: "Discuss Soft Skills Development" }}
    />
  );
}
