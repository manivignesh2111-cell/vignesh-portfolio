import { Download, FileText, ShieldCheck, Eye } from "lucide-react";
import { Section, Reveal } from "./Section";
import { profile } from "@/lib/portfolio-data";
import resumeAsset from "@/assets/resume.pdf.asset.json";

const RESUME_URL = resumeAsset.url;


export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="V. VIGNESH – Data Analyst Resume" subtitle="ATS-friendly, recruiter-ready, and updated for 2026.">
      <Reveal>
        <div className="max-w-4xl mx-auto glass rounded-3xl shadow-elegant overflow-hidden">
          <div className="grid md:grid-cols-[1fr_1.2fr]">
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <ShieldCheck className="size-3.5" /> ATS Friendly
                </span>
                <h3 className="font-display text-2xl font-bold mt-4">{profile.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{profile.title}</p>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li>• Optimized keywords for Data Analyst roles</li>
                  <li>• Clean, single-column ATS layout</li>
                  <li>• Projects, skills & certifications included</li>
                  <li>• PDF format · 1 page</li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition"
                >
                  <Download className="size-4" /> Download Resume
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold hover:shadow-glow transition"
                >
                  <Eye className="size-4" /> Preview
                </a>
              </div>
            </div>

            <div className="relative bg-gradient-primary text-primary-foreground p-8 sm:p-10 flex flex-col justify-center">
              <div className="absolute inset-0 opacity-20 grid-bg" />
              <div className="relative">
                <FileText className="size-12 mb-4 opacity-90" />
                <h4 className="font-display text-2xl font-bold leading-tight">
                  One page. Every reason to interview me.
                </h4>
                <p className="mt-3 text-sm/relaxed opacity-90">
                  My resume distills hands-on experience across Python, SQL, Power BI, Tableau,
                  and Machine Learning into a recruiter-friendly document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
