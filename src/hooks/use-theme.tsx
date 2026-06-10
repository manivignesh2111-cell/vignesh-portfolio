import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ColorTheme = "purple" | "blue" | "green" | "rose" | "amber" | "cyan";

interface ThemeContextValue {
  color: ColorTheme;
  setColor: (c: ColorTheme) => void;
  dark: boolean;
  toggleDark: () => void;
  autoCycle: boolean;
  toggleAutoCycle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const COLOR_THEMES: ColorTheme[] = ["purple", "blue", "green", "rose", "amber", "cyan"];
const CYCLE_INTERVAL_MS = 5000;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [color, setColorState] = useState<ColorTheme>("purple");
  const [dark, setDark] = useState(false);
  const [autoCycle, setAutoCycle] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedColor = localStorage.getItem("color-theme") as ColorTheme | null;
    const storedDark = localStorage.getItem("theme");
    const storedAuto = localStorage.getItem("theme-auto-cycle");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedColor && COLOR_THEMES.includes(storedColor)) {
      setColorState(storedColor);
      document.documentElement.setAttribute("data-theme", storedColor);
    } else {
      document.documentElement.setAttribute("data-theme", "purple");
    }

    const isDark = storedDark ? storedDark === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);

    if (storedAuto !== null) setAutoCycle(storedAuto === "true");

    setMounted(true);
  }, []);

  // Auto-cycle through color themes every 5 seconds when enabled
  useEffect(() => {
    if (!mounted || !autoCycle) return;
    const id = window.setInterval(() => {
      setColorState((prev) => {
        const next = COLOR_THEMES[(COLOR_THEMES.indexOf(prev) + 1) % COLOR_THEMES.length];
        document.documentElement.setAttribute("data-theme", next);
        return next;
      });
    }, CYCLE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [autoCycle, mounted]);

  const setColor = (c: ColorTheme) => {
    setColorState(c);
    document.documentElement.setAttribute("data-theme", c);
    localStorage.setItem("color-theme", c);
  };

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const toggleAutoCycle = () => {
    setAutoCycle((prev) => {
      const next = !prev;
      localStorage.setItem("theme-auto-cycle", String(next));
      return next;
    });
  };

  // Prevent hydration mismatch by not rendering theme-dependent UI until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ color, setColor, dark, toggleDark, autoCycle, toggleAutoCycle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
