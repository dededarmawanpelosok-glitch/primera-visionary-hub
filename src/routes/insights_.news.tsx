import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/ins-news.jpg";

export const Route = createFileRoute("/insights/news")({
  head: () => ({ meta: [
    { title: "News — Primera Karya Sinergia" },
    { name: "description", content: "Company updates, program launches, event highlights, and partnership updates." },
    { property: "og:title", content: "News — Primera" },
    { property: "og:description", content: "Updates from Primera Karya Sinergia." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "News",
        title: <>News and updates <span className="italic font-serif-italic font-normal text-gold">from Primera.</span></>,
        subtitle: "Stay current with Primera's program launches, event highlights, partnership announcements, and capability updates.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "What We Share", heading: "Curated updates — not noise.",
          body: [
            "Primera shares meaningful updates that matter to clients and capability leaders — new programs, new tools, partnership announcements, and selected event highlights.",
            "We avoid filler content. If we publish it, it's because we believe leaders should know about it.",
          ]},
        { type: "cards", eyebrow: "Update Categories", heading: "Where to follow Primera.", cols: 4,
          cards: [
            { title: "Company Updates", body: "Organizational milestones, new advisor appointments, and capability investments." },
            { title: "Program Launches", body: "New programs, refreshed curriculum, and emerging capability areas." },
            { title: "Event Highlights", body: "Key learnings from executive briefings, masterclasses, and partner events." },
            { title: "Partnership Updates", body: "New partner announcements, integrated solution launches, and ecosystem updates." },
          ]},
        { type: "list", eyebrow: "Recent Updates", heading: "Selected highlights.",
          items: [
            "CRM ACT continues to expand across banking and insurance distribution",
            "AI for Financial Advisors masterclass series launched",
            "Leadership-to-Performance program refreshed with new measurement model",
            "New facilitator development cohort completed certification",
            "Quarterly executive briefing on capability investment outlook",
            "Expanded collaboration with sharia financial institutions",
          ]},
        { type: "split", eyebrow: "Stay in Touch", heading: "Follow Primera updates.",
          body: [
            "Connect with Primera through our official channels for ongoing updates and curated insight.",
            "Important program and partnership updates are also shared directly with active client and partner contacts.",
          ],
          bullets: [
            "LinkedIn — most timely updates",
            "Direct partner briefings on major announcements",
            "Quarterly outlook sessions with active clients",
            "Email updates for registered participants",
          ]},
      ]}
      cta={{ title: "Follow Primera Updates", label: "Talk to Us" }}
    />
  );
}
