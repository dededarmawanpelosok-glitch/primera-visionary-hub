import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/svc-consulting.jpg";

export const Route = createFileRoute("/services/business-consulting")({
  head: () => ({ meta: [
    { title: "Business Consulting — Primera Karya Sinergia" },
    { name: "description", content: "Business consulting and performance advisory for execution-focused growth." },
    { property: "og:title", content: "Business Consulting — Primera" },
    { property: "og:description", content: "Strategy, operating model, and performance rhythm advisory." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Business Consulting",
        title: <>Business consulting and performance advisory for <span className="italic font-serif-italic font-normal text-gold">execution-focused growth.</span></>,
        subtitle: "Primera works with leadership teams to translate strategy into execution — through operating model design, performance rhythm, and people-system alignment.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why It Matters", heading: "Most strategies fail in execution — not in design.",
          body: [
            "Leadership teams rarely lack vision. What they often lack is the operational discipline that turns ambition into weekly, measurable progress across teams.",
            "Primera advisors bring decades of operating experience in financial services, distribution, and corporate management. We work shoulder-to-shoulder with executives to install execution rhythm and capability that lasts.",
          ]},
        { type: "cards", eyebrow: "Advisory Areas", heading: "Where Primera adds executive-level value.", cols: 3,
          cards: [
            { title: "Strategy Translation", body: "Turning corporate strategy into clear execution priorities and team-level commitments." },
            { title: "Operating Model", body: "Role clarity, decision rights, and structure for scale and accountability." },
            { title: "Sales & Distribution", body: "Channel productivity, branch effectiveness, and frontline performance design." },
            { title: "Performance Rhythm", body: "Weekly, monthly, quarterly cadences that drive disciplined execution." },
            { title: "Management Alignment", body: "Aligning leaders, KPIs, and behaviors so the organization moves as one." },
            { title: "Capability Roadmap", body: "Multi-year capability investment plan tied to business strategy." },
          ]},
        { type: "list", eyebrow: "Engagement Types", heading: "Flexible advisory engagements.",
          items: [
            "Strategic capability diagnostic",
            "Operating model and structure review",
            "Sales productivity transformation",
            "Branch / distribution performance program",
            "Performance management redesign",
            "Leadership team alignment retreat",
          ]},
        { type: "split", eyebrow: "Outcomes", heading: "Real, measurable improvement in execution.",
          body: [
            "Engagements are designed for impact — not deliverables. Every project links to a measurable performance lever and an accountable owner.",
            "Primera blends consulting, learning, and tooling so the change is sustained inside the organization, not dependent on the consultant.",
          ],
          bullets: [
            "Sharper strategic focus and prioritization",
            "Faster, clearer decision-making",
            "Stronger performance rhythm and accountability",
            "Higher productivity per leader and per team",
          ]},
      ]}
      cta={{ title: "Discuss Business Advisory" }}
    />
  );
}
