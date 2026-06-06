import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Footer() {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative border-t border-border/60 mt-10">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-display text-2xl font-bold text-gradient">V. VIGNESH</div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Data Analyst building dashboards, models, and data-driven products.
            </p>
            <div className="mt-4 flex gap-2">
              <a href={`mailto:${profile.email}`} aria-label="Email" className="grid place-items-center size-10 rounded-xl glass hover:shadow-glow transition"><Mail className="size-4" /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid place-items-center size-10 rounded-xl glass hover:shadow-glow transition"><Github className="size-4" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid place-items-center size-10 rounded-xl glass hover:shadow-glow transition"><Linkedin className="size-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button onClick={() => go(l.id)} className="text-muted-foreground hover:text-primary transition">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Get in touch</h4>
            <p className="text-sm text-muted-foreground">{profile.location}</p>
            <a href={`mailto:${profile.email}`} className="text-sm text-primary hover:underline break-all">{profile.email}</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 V. VIGNESH. All rights reserved.</p>
          <button onClick={top} className="inline-flex items-center gap-2 text-xs font-medium rounded-full glass px-4 py-2 hover:shadow-glow transition">
            <ArrowUp className="size-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
