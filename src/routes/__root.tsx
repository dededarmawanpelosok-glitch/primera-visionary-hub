import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-[8rem] leading-none text-ink">404</h1>
        <p className="mt-2 text-ink/70">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-cream">Go home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Primera Karya Sinergia — Empowering People. Elevating Performance." },
      { name: "description", content: "Premium people development consulting firm in Indonesia. Leadership, sales capability, talent assessment, and AI-supported learning for measurable business performance." },
      { name: "author", content: "Primera Karya Sinergia" },
      { property: "og:title", content: "Primera Karya Sinergia — Empowering People. Elevating Performance." },
      { property: "og:description", content: "Premium people development consulting firm in Indonesia. Leadership, sales capability, talent assessment, and AI-supported learning for measurable business performance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Primera Karya Sinergia — Empowering People. Elevating Performance." },
      { name: "twitter:description", content: "Premium people development consulting firm in Indonesia. Leadership, sales capability, talent assessment, and AI-supported learning for measurable business performance." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/c2cf5bc4-3db9-40ea-a04b-ba41d9f54825" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/c2cf5bc4-3db9-40ea-a04b-ba41d9f54825" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body><div id="app">{children}</div><Scripts /></body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20"><Outlet /></main>
      <Footer />
    </>
  );
}
