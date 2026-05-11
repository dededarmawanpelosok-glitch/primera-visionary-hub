import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/cli-industries.jpg";

export const Route = createFileRoute("/clients/industries")({
  head: () => ({ meta: [
    { title: "Industries We Serve — Primera Karya Sinergia" },
    { name: "description", content: "Built for Indonesian business realities — across BFSI, insurance, telco, SOE, manufacturing, and FMCG." },
    { property: "og:title", content: "Industries — Primera" },
    { property: "og:description", content: "Sector-specific expertise across Indonesian industries." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Industries We Serve",
        title: <>Built for <span className="italic font-serif-italic font-normal text-gold">Indonesian business realities.</span></>,
        subtitle: "Primera understands the operational, regulatory, and cultural context of Indonesian organizations — and tailors every program accordingly.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Sector Depth", heading: "Industry context that shows up in every workshop.",
          body: [
            "Generic learning rarely changes behavior. Industry-specific cases, vocabulary, and constraints are what make participants nod and say 'yes — that's us.'",
            "Primera's facilitators bring real operating experience from each sector we serve, so programs feel native to participants from day one.",
          ]},
        { type: "cards", eyebrow: "Industries", heading: "Sectors we serve with depth.", cols: 3,
          cards: [
            { title: "Banking & Financial Services", body: "Commercial banking, sharia banking, multifinance, capital markets, and wealth management." },
            { title: "Insurance & Sharia Insurance", body: "Life, general, sharia, bancassurance, and corporate insurance distribution." },
            { title: "Telecommunications", body: "Operators and digital service teams building hybrid sales and customer capability." },
            { title: "State-Owned Enterprises", body: "Strategic SOEs investing in leadership, governance, and operational excellence." },
            { title: "Manufacturing & FMCG", body: "Industrial and consumer goods sales, distribution, and supervisory capability." },
            { title: "Professional & Education", body: "Professional services, higher education, and learning organizations." },
          ]},
        { type: "list", eyebrow: "What Industry Depth Brings", heading: "Why context matters for capability work.",
          items: [
            "Real industry cases and role-plays",
            "Regulatory and compliance awareness",
            "Realistic customer and stakeholder profiles",
            "Industry-specific KPIs and language",
            "Faster participant trust and engagement",
            "Stronger application back at work",
          ]},
        { type: "split", eyebrow: "Cross-Industry Learning", heading: "Borrowing the best from across sectors.",
          body: [
            "While we go deep in each industry, we also bring cross-industry insights — letting BFSI clients learn from FMCG distribution, or telcos learn from banking sales discipline.",
            "This combination of depth and breadth is part of why long-term clients keep returning.",
          ],
          bullets: [
            "Best-practice cross-pollination between sectors",
            "Benchmarking insights across industries",
            "Modern AI and digital adoption patterns",
            "Cultural and regional context for Indonesia",
          ]},
      ]}
      cta={{ title: "Explore Industry Solutions", label: "Talk to Us" }}
    />
  );
}
