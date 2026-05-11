import { createFileRoute } from "@tanstack/react-router";
import { SubpageTemplate } from "@/components/SubpageTemplate";
import hero from "@/assets/cli-partners.jpg";

export const Route = createFileRoute("/clients/partners")({
  head: () => ({ meta: [
    { title: "Our Partners — Primera Karya Sinergia" },
    { name: "description", content: "Trusted by organizations across financial services, insurance, telco, SOE, manufacturing, and FMCG." },
    { property: "og:title", content: "Our Partners — Primera" },
    { property: "og:description", content: "Long-term partnerships built on practical impact and trust." },
    { property: "og:image", content: hero },
  ]}),
  component: Page,
});

function Page() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Our Partners",
        title: <>Trusted by organizations <span className="italic font-serif-italic font-normal text-gold">across industries.</span></>,
        subtitle: "Primera partners with leading Indonesian organizations — building long-term capability programs that grow with their business.",
        image: hero,
      }}
      sections={[
        { type: "intro", eyebrow: "Partnership Philosophy", heading: "Long-term partners, not one-off vendors.",
          body: [
            "Most of Primera's clients return year after year. We treat every engagement as the beginning of a multi-year partnership — designed around their evolving business priorities.",
            "Our work spans BFSI, insurance, telco, state-owned enterprises, manufacturing, FMCG, and professional services. Specific client names are shared discreetly, with permission, in private conversations.",
          ]},
        { type: "cards", eyebrow: "Partner Categories", heading: "Where we work most deeply.", cols: 3,
          cards: [
            { title: "Banking & Financial Services", body: "Commercial banks, sharia banks, multifinance, and capital markets institutions." },
            { title: "Insurance", body: "Life, general, sharia insurance, and bancassurance partners." },
            { title: "Telecommunications", body: "Operator and digital service organizations developing modern capability." },
            { title: "State-Owned Enterprises", body: "Strategic SOEs investing in leadership, talent, and operational excellence." },
            { title: "Manufacturing & FMCG", body: "Industrial and consumer-goods organizations strengthening sales and supervisory capability." },
            { title: "Professional & Education", body: "Professional services, higher education, and learning institutions." },
          ]},
        { type: "list", eyebrow: "What Partners Value", heading: "Why organizations choose Primera.",
          items: [
            "Practitioner-led facilitators with industry experience",
            "Custom design — no off-the-shelf programs",
            "Strong governance, professionalism, and reliability",
            "Measurable, business-linked learning outcomes",
            "Long-term capability roadmaps, not single events",
            "Discreet, permission-based reference handling",
          ]},
        { type: "split", eyebrow: "Credibility", heading: "Discreet by design — referenced privately.",
          body: [
            "Specific client logos and case names are shared in confidential briefings, respecting the privacy and brand sensitivity of our partners.",
            "References, sample case studies, and measurable outcomes can be presented during initial discussions under standard professional discretion.",
          ],
          bullets: [
            "Permission-based logo and reference disclosure",
            "Confidential case study briefings",
            "NDAs respected on every engagement",
            "Long-term partner-first orientation",
          ]},
      ]}
      cta={{ title: "Discuss Partnership", label: "Talk to Us" }}
    />
  );
}
