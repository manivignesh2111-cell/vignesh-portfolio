import { Github, ArrowUpRight } from "lucide-react";
import { Section, Reveal } from "./Section";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work" subtitle="Selected projects spanning dashboards, SQL analysis, ML, and data engineering.">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="group relative block h-full glass rounded-3xl p-6 shadow-card overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-20 -right-20 size-48 rounded-full bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />

              <div className="relative flex items-start justify-between mb-4">
                <div className="grid place-items-center size-12 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="grid place-items-center size-10 rounded-xl glass text-primary group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/15">
                    {t}
                  </span>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <Github className="size-4" /> View on GitHub
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
