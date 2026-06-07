import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "V. VIGNESH — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of V. Vignesh — Data Analyst skilled in Python, SQL, Power BI, Tableau, and Machine Learning. Dashboards, predictive models, and data-driven insights.",
      },
      { name: "keywords", content: "Data Analyst, Business Analyst, Power BI, Tableau, SQL, Python, Machine Learning, Portfolio, V. Vignesh" },
      { property: "og:title", content: "V. Vignesh — Data Analyst Portfolio" },
      { property: "og:description", content: "Dashboards, ML models, and data-driven insights by V. Vignesh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
