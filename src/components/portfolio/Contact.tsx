import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Section, Reveal } from "./Section";
import { profile } from "@/lib/portfolio-data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something With Data" subtitle="Have a role, project, or collaboration in mind? Let's talk.">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 max-w-6xl mx-auto">
        <Reveal>
          <div className="glass rounded-3xl p-6 sm:p-8 shadow-card h-full flex flex-col gap-4">
            <h3 className="font-display text-xl font-bold">Reach Out</h3>
            <p className="text-sm text-muted-foreground">
              I'm open to internships, full-time roles, and freelance analytics projects.
            </p>
            <div className="mt-2 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 p-3 rounded-2xl glass hover:shadow-glow transition">
                <div className="grid place-items-center size-10 rounded-xl bg-gradient-primary text-primary-foreground"><Mail className="size-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium text-sm break-all">{profile.email}</div>
                </div>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-2xl glass hover:shadow-glow transition">
                <div className="grid place-items-center size-10 rounded-xl bg-gradient-primary text-primary-foreground"><Github className="size-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">GitHub</div>
                  <div className="font-medium text-sm">@manivignesh2111-cell</div>
                </div>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-2xl glass hover:shadow-glow transition">
                <div className="grid place-items-center size-10 rounded-xl bg-gradient-primary text-primary-foreground"><Linkedin className="size-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">LinkedIn</div>
                  <div className="font-medium text-sm">Vumnabad Vignesh</div>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-2xl glass">
                <div className="grid place-items-center size-10 rounded-xl bg-gradient-primary text-primary-foreground"><MapPin className="size-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="font-medium text-sm">{profile.location}</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8 shadow-card h-full space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your full name" required />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
            </div>
            <Field label="Subject" name="subject" placeholder="How can I help?" />
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or project..."
                className="w-full rounded-xl bg-background/60 border border-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition"
            >
              {sent ? <CheckCircle2 className="size-4" /> : <Send className="size-4" />}
              {sent ? "Opening your mail client..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-background/60 border border-input px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
    </div>
  );
}
