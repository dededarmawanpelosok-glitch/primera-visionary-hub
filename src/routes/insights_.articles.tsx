import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/ins-articles.jpg";

export const Route = createFileRoute("/insights/articles")({
  head: () => ({ meta: [
    { title: "Articles — Primera Karya Sinergia" },
    { name: "description", content: "Articles for people-driven leaders — leadership, sales, talent, AI productivity, and CRM ACT." },
    { property: "og:title", content: "Articles — Primera" },
    { property: "og:description", content: "Practical thinking for modern leaders." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Articles",
        title: <>Articles for <span className="italic font-serif-italic font-normal text-gold">people-driven leaders.</span></>,
        subtitle: "Practical thinking on leadership, sales, talent, AI productivity, and modern capability — written by Primera advisors and facilitators.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Editorial Focus", heading: "Practical, not theoretical.",
          body: [
            "Primera articles are written by practitioners — for practitioners. Each piece focuses on what leaders, HR, and L&D can apply this quarter, not abstract theory.",
            "Topics span leadership behavior, sales productivity, talent decisions, AI in the workplace, and capability transformation.",
          ]},
        { type: "cards", eyebrow: "Categories", heading: "What we write about.", cols: 3,
          cards: [
            { title: "Leadership", body: "Modern leadership behavior, executive presence, and people-driven performance." },
            { title: "Sales Capability", body: "Consultative selling, sales productivity, and frontline execution discipline." },
            { title: "Talent & HR", body: "Selection, succession, and people decisions backed by structured assessment." },
            { title: "AI & Productivity", body: "Practical AI tools for advisors, leaders, and L&D teams." },
            { title: "CRM ACT", body: "Banking sales execution, mobile CRM, and field accountability." },
            { title: "Learning Design", body: "Adult learning, facilitation craft, and learning-to-performance practice." },
          ]},
        { type: "list", eyebrow: "Recent Themes", heading: "Topics our readers are asking about.",
          items: [
            "What separates capable managers from outstanding ones",
            "Why most sales productivity programs underperform",
            "Designing succession that actually works",
            "AI tools every financial advisor should adopt",
            "From training event to behavior change",
            "Building internal facilitator capability at scale",
            "How CRM ACT transforms branch sales rhythm",
            "Coaching conversations that change performance",
          ]},
        { type: "split", eyebrow: "Editorial Standard", heading: "Written by people who have done the work.",
          body: [
            "Every article is reviewed by senior Primera advisors and facilitators with hands-on operating experience.",
            "We avoid hype, generic frameworks, and unsupported claims — and prioritize content leaders can act on.",
          ],
          bullets: [
            "Practitioner-authored content",
            "No paid product placement",
            "Indonesian context first",
            "Application-oriented framing",
          ]},
      ]}
      cta={{ title: "Talk to a Primera Advisor", label: "Schedule Consultation" }}
    />
  );
}
