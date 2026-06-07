import { Award, ShieldCheck } from "lucide-react";
import { Section, Reveal } from "./Section";
import { certifications } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous Learning" subtitle="Industry-recognized programs that back up my analytics expertise.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <div className="group glass rounded-3xl p-6 shadow-card h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center size-14 rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow shrink-0">
                  <Award className="size-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg leading-tight mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-border/60 flex items-center gap-2 text-xs text-primary font-medium">
                <ShieldCheck className="size-4" />
                {"url" in c && c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    View Credential
                  </a>
                ) : (
                  <span>Verified Credential</span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
