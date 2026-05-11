import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/ins-webinars.jpg";

export const Route = createFileRoute("/insights/webinars")({
  head: () => ({ meta: [
    { title: "Webinars — Primera Karya Sinergia" },
    { name: "description", content: "Webinars and executive briefings for modern capability development." },
    { property: "og:title", content: "Webinars — Primera" },
    { property: "og:description", content: "Live and on-demand sessions on leadership, sales, talent, and AI." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Webinars",
        title: <>Webinars and executive briefings for <span className="italic font-serif-italic font-normal text-gold">modern capability development.</span></>,
        subtitle: "Live and on-demand sessions where Primera advisors share practical perspective with HR, L&D, and business leaders.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Why Webinars", heading: "Short, sharp, decision-useful.",
          body: [
            "Primera webinars are designed to give busy leaders applicable insight in 45–60 minutes — without filler, generic frameworks, or product pitches.",
            "Sessions combine practitioner perspective, structured tools, and live Q&A so participants leave with clear next steps.",
          ]},
        { type: "cards", eyebrow: "Webinar Themes", heading: "What we run sessions on.", cols: 3,
          cards: [
            { title: "Modern Leadership", body: "Leading hybrid, cross-generational, and high-pressure teams." },
            { title: "Sales Productivity", body: "Pipeline rhythm, conversion behavior, and CRM execution discipline." },
            { title: "Talent Decisions", body: "Selection, succession, and high-potential identification." },
            { title: "AI for Workplace", body: "Practical AI tools for leaders, advisors, and L&D teams." },
            { title: "Learning Impact", body: "L1–L4 measurement and stakeholder reporting." },
            { title: "CRM ACT Briefings", body: "How CRM ACT transforms banking sales execution." },
          ]},
        { type: "list", eyebrow: "Formats", heading: "Live, on-demand, and in-house formats.",
          items: [
            "Public live webinars",
            "On-demand recorded sessions",
            "Private executive briefings for client leadership teams",
            "Pre-engagement briefings for HRD and L&D heads",
            "Quarterly capability outlook sessions",
            "Topic-specific deep-dive masterclasses",
          ]},
        { type: "split", eyebrow: "Register Interest", heading: "Be the first to know.",
          body: [
            "Tell us which themes you'd like to attend, and we'll notify you when the next session opens.",
            "Private executive briefings can be scheduled directly through the contact form for client leadership teams.",
          ],
          bullets: [
            "Live and on-demand formats",
            "Private executive sessions on request",
            "No spam — only relevant invitations",
            "Recordings shared with registered participants",
          ]},
      ]}
      cta={{ title: "Register Webinar Interest", label: "Talk to Us" }}
    />
  );
}
