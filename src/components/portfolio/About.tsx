import { GraduationCap, Target, User } from "lucide-react";
import { Section, Reveal } from "./Section";
import { profile, education } from "@/lib/portfolio-data";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Turning Data Into Decisions" subtitle="A quick look at who I am and where I'm headed.">
      <div className="grid lg:grid-cols-3 gap-6">
        <Reveal className="lg:col-span-1">
          <div className="glass rounded-3xl p-6 h-full shadow-card">
            <div className="grid place-items-center size-12 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-4">
              <User className="size-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Professional Bio</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{profile.bio}</p>
          </div>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-2">
          <div className="glass rounded-3xl p-6 h-full shadow-card">
            <div className="flex items-center gap-3 mb-5">
              <div className="grid place-items-center size-12 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <GraduationCap className="size-6" />
              </div>
              <h3 className="font-display text-xl font-bold">Education</h3>
            </div>
            <div className="relative pl-6 border-l-2 border-dashed border-primary/30 space-y-6">
              {education.map((e, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[33px] top-1 size-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold">{e.school}</h4>
                    {e.period && <span className="text-xs text-primary font-medium">{e.period}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{e.degree}</p>
                  <p className="text-sm text-muted-foreground/80">{e.field}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160} className="lg:col-span-3">
          <div className="glass rounded-3xl p-6 shadow-card flex flex-col md:flex-row gap-5 items-start">
            <div className="grid place-items-center size-12 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0">
              <Target className="size-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-2">Career Objective</h3>
              <p className="text-muted-foreground leading-relaxed">{profile.objective}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
