import { Briefcase, CheckCircle2 } from "lucide-react";
import { Section, Reveal } from "./Section";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional Journey" subtitle="Hands-on internships and leadership roles where I sharpened my analytics craft.">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
        <div className="space-y-10">
          {experiences.map((e, i) => (
            <Reveal key={e.company} delay={i * 80}>
              <div className={`relative md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                <span className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 size-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                <div className="pl-12 md:pl-0 md:pr-10 md:text-right">
                  <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-1">
                    <Briefcase className="size-4" /> {e.company}
                  </div>
                  <h3 className="font-display text-xl font-bold">{e.role}</h3>
                </div>
                <div className="pl-12 md:pl-10 mt-4 md:mt-0">
                  <div className="glass rounded-2xl p-5 shadow-card">
                    <ul className="space-y-2.5">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
