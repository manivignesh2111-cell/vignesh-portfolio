import { Section, Reveal } from "./Section";
import { skillGroups } from "@/lib/portfolio-data";
import { Code2, Database, BarChart3, Brain, Wrench } from "lucide-react";

const ICONS = [Code2, Database, BarChart3, Brain, Wrench];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical Toolbox" subtitle="A curated stack I use to build dashboards, models, and data products.">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillGroups.map((g, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={g.title} delay={i * 70}>
              <div className="group glass rounded-3xl p-6 shadow-card h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid place-items-center size-11 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg">{g.title}</h3>
                </div>
                <div className="space-y-3">
                  {g.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-primary transition-all duration-1000 group-hover:[transform:scaleX(1)] origin-left"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
