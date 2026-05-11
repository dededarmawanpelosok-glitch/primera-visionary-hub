import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/svc-sales.jpg";

export const Route = createFileRoute("/services/sales-capability")({
  head: () => ({ meta: [
    { title: "Sales Capability — Primera Karya Sinergia" },
    { name: "description", content: "Sales capability that turns activity into trusted advisory and measurable result." },
    { property: "og:title", content: "Sales Capability — Primera" },
    { property: "og:description", content: "Consultative selling, productivity, advisory, and AI-enabled performance." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Sales Capability",
        title: <>Sales capability that turns activity into <span className="italic font-serif-italic font-normal text-gold">trusted advisory and measurable result.</span></>,
        subtitle: "Primera develops sales people who win through trust, structure, and discipline — combining consultative selling, sales productivity, and modern digital tools.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why It Matters", heading: "Customers no longer buy products — they buy clarity and trust.",
          body: [
            "In banking, insurance, and corporate sales, the customer journey is now richer and more demanding. Activity alone does not produce result; structured execution, advisory mindset, and disciplined pipeline management do.",
            "Primera builds sales capability rooted in financial industry reality — combining consultative selling skills, sales productivity behaviors, and digital execution tools like CRM ACT.",
          ]},
        { type: "cards", eyebrow: "Capability Areas", heading: "End-to-end sales capability development.", cols: 3,
          cards: [
            { title: "Consultative Selling", body: "Discovery, value framing, objection handling, and trusted-advisor positioning." },
            { title: "Sales Productivity", body: "Activity discipline, pipeline rigor, and conversion behaviors that scale." },
            { title: "Financial Advisory", body: "Wealth, insurance, and protection advisory grounded in client lifecycle thinking." },
            { title: "Digital Sales", body: "Hybrid selling, CRM execution, and digital prospecting playbooks." },
            { title: "AI for Advisors", body: "Practical AI tools for preparation, personalization, and follow-up productivity." },
            { title: "Sales Leadership", body: "Coaching cadence, performance dialogue, and team productivity rhythm." },
          ]},
        { type: "cards", eyebrow: "Who It Is For", heading: "Built for diverse sales roles.", cols: 3,
          cards: [
            { title: "Relationship Managers", body: "Banking RMs, wealth advisors, and corporate banking professionals." },
            { title: "Insurance Advisors", body: "Agency, bancassurance, sharia, and corporate insurance specialists." },
            { title: "B2B & Distribution Sales", body: "Industrial, FMCG, telco, and enterprise sales teams." },
          ]},
        { type: "list", eyebrow: "Outcomes", heading: "Measurable improvement in sales performance.",
          items: [
            "Higher conversion rate from lead to client",
            "Larger average wallet share per customer",
            "Stronger pipeline discipline and forecast accuracy",
            "Improved cross-sell and up-sell of solutions",
            "Better advisor retention and ramp-up time",
            "Stronger sales coaching cadence by leaders",
          ]},
        { type: "split", eyebrow: "Delivery", heading: "Programs designed by sales practitioners.",
          body: [
            "Our facilitators have led sales teams in BFSI, telco, and FMCG. Cases, role-plays, and tools are built from real industry experience — not generic content.",
            "Programs integrate with CRM ACT and other Primera tools so behavior change is supported by daily execution discipline.",
          ],
          bullets: [
            "Industry-specific case studies and role-plays",
            "Manager involvement for sustained reinforcement",
            "Optional CRM ACT integration for execution tracking",
            "L1–L4 measurement of impact",
          ]},
      ]}
      cta={{ title: "Discuss Sales Capability" }}
    />
  );
}
