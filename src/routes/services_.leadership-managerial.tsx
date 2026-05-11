import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/svc-leadership.jpg";

export const Route = createFileRoute("/services/leadership-managerial")({
  head: () => ({ meta: [
    { title: "Leadership & Managerial — Primera Karya Sinergia" },
    { name: "description", content: "Build leadership capability with clarity, accountability, and measurable performance." },
    { property: "og:title", content: "Leadership & Managerial — Primera" },
    { property: "og:description", content: "Leadership development for teams that need to perform." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Leadership & Managerial",
        title: <>Leadership capability for teams that need <span className="italic font-serif-italic font-normal text-gold">clarity, accountability, and performance.</span></>,
        subtitle: "Primera develops leaders who balance results with people — through practical learning, coaching cadence, and measurable behavior change.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why It Matters", heading: "Leadership defines whether strategy becomes execution.",
          body: [
            "Most leadership gaps are not knowledge gaps — they are application gaps. Managers know what to do, but struggle to align teams, drive accountability, and sustain performance amid change.",
            "Primera designs leadership programs that translate concepts into daily managerial behavior. We pair frameworks with reflection, coaching, and on-the-job application so progress is visible in business outcomes — not only in classroom satisfaction scores.",
          ]},
        { type: "cards", eyebrow: "Who It Is For", heading: "Designed for every layer of leadership.",
          cols: 3,
          cards: [
            { title: "Emerging Leaders", body: "First-time leaders transitioning from individual contributors to team managers." },
            { title: "Mid-Level Managers", body: "Function heads driving cross-team execution, performance, and engagement." },
            { title: "Senior Leaders", body: "Directors and executives shaping strategy, culture, and enterprise-wide performance." },
          ]},
        { type: "cards", eyebrow: "Sample Programs", heading: "Programs built around real managerial moments.",
          cols: 3,
          cards: [
            { title: "Leadership Foundation", body: "Self-leadership, accountability, situational decision-making, and team rhythm." },
            { title: "Coaching for Performance", body: "Conversations that develop people while delivering business outcomes." },
            { title: "Leading Change", body: "Communicating change, managing resistance, and sustaining momentum." },
            { title: "Strategic Thinking", body: "From operational manager to strategic leader with broader business perspective." },
            { title: "High-Performance Teams", body: "Trust, alignment, conflict, and execution discipline within teams." },
            { title: "Executive Presence", body: "Communication, gravitas, and influence for senior leadership." },
          ]},
        { type: "list", eyebrow: "Outcomes", heading: "What changes after the program.",
          items: [
            "Leaders run clearer performance conversations every week",
            "Teams operate with stronger accountability and ownership",
            "Better delegation frees senior time for strategic work",
            "Engagement and retention improve through better managerial behavior",
            "Faster decision-making at the right level of leadership",
            "Stronger pipeline of internal leadership successors",
          ]},
        { type: "split", eyebrow: "Delivery Format", heading: "Practical, blended, and measurable.",
          body: [
            "Programs combine in-class workshops, virtual sessions, peer coaching, manager involvement, and on-the-job application assignments.",
            "Evaluation follows the Kirkpatrick model — from reaction to behavior change and business impact.",
          ],
          bullets: [
            "Workshop modules with real business cases",
            "1:1 and group coaching reinforcement",
            "Manager-led application reviews",
            "Pre/post diagnostic and behavior tracking",
          ]},
      ]}
      cta={{ title: "Discuss Leadership Development", label: "Schedule Consultation" }}
    />
  );
}
