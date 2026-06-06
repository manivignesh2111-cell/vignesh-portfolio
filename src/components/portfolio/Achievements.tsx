import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Section";
import { achievements } from "@/lib/portfolio-data";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1400;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass rounded-3xl shadow-elegant p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 80} className="text-center">
              <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">
                <Counter to={a.value} suffix={a.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{a.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
