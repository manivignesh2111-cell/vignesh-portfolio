import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ColorTheme = "purple" | "blue" | "green" | "rose" | "amber" | "cyan";

interface ThemeContextValue {
  color: ColorTheme;
  setColor: (c: ColorTheme) => void;
  dark: boolean;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const COLOR_THEMES: ColorTheme[] = ["purple", "blue", "green", "rose", "amber", "cyan"];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [color, setColorState] = useState<ColorTheme>("purple");
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedColor = localStorage.getItem("color-theme") as ColorTheme | null;
    const storedDark = localStorage.getItem("theme");
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

    setMounted(true);
  }, []);

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

  // Prevent hydration mismatch by not rendering theme-dependent UI until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ color, setColor, dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
