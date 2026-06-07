import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Sparkles, TrendingUp, Database, BarChart3 } from "lucide-react";
import portraitAsset from "@/assets/vignesh-portrait.jpeg.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";
const portrait = portraitAsset.url;
const RESUME_URL = resumeAsset.url;
import { profile } from "@/lib/portfolio-data";


const ROLES = [
  "Data Analyst",
  "Data Visualization Enthusiast",
];

function useTyping(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  const typed = useTyping(ROLES);
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 -left-40 size-[480px] rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -right-40 size-[520px] rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            Available for internships & full-time roles
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">V. VIGNESH</span>
          </h1>

          <div className="text-xl sm:text-2xl font-medium text-muted-foreground min-h-[2em]">
            <span className="text-foreground">I'm a </span>
            <span className="text-primary font-semibold">{typed}</span>
            <span className="inline-block w-0.5 h-6 align-middle ml-1 bg-primary animate-blink" />
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {profile.summary}
          </p>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            {profile.location}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button onClick={() => go("projects")} className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] active:scale-100 transition">
              <BarChart3 className="size-4" /> View Projects
            </button>
            <a href={RESUME_URL} download className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:shadow-glow transition">
              <Download className="size-4" /> Download Resume
            </a>
            <button onClick={() => go("contact")} className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-accent transition">
              <Mail className="size-4" /> Contact Me
            </button>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid place-items-center size-12 rounded-xl glass hover:shadow-glow transition">
              <Github className="size-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid place-items-center size-12 rounded-xl glass hover:shadow-glow transition">
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-[2.2rem] overflow-hidden glass shadow-elegant p-2">
              <img
                src={portrait}
                alt="V. Vignesh — Data Analyst"
                width={1024}
                height={1024}
                className="size-full object-cover rounded-[1.8rem]"
              />
            </div>

            <div className="absolute -left-6 top-10 glass rounded-2xl p-3 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center size-10 rounded-xl bg-primary/15 text-primary">
                  <TrendingUp className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Dashboards Built</div>
                  <div className="font-bold">12+</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-1/2 glass rounded-2xl p-3 shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="grid place-items-center size-10 rounded-xl bg-primary/15 text-primary">
                  <Database className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">SQL Queries</div>
                  <div className="font-bold">200+</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-8 glass rounded-2xl p-3 shadow-card animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-3">
                <div className="grid place-items-center size-10 rounded-xl bg-primary/15 text-primary">
                  <BarChart3 className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">ML Models</div>
                  <div className="font-bold">8+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => go("about")}
        aria-label="Scroll to about"
        className="absolute left-1/2 -translate-x-1/2 bottom-6 grid place-items-center size-10 rounded-full glass animate-float text-primary"
      >
        <ArrowDown className="size-4" />
      </button>
    </section>
  );
}
