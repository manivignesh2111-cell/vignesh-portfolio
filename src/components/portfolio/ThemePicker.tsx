import { Palette, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme, type ColorTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const themes: { id: ColorTheme; label: string; class: string }[] = [
  { id: "purple", label: "Purple", class: "bg-purple-500" },
  { id: "blue", label: "Blue", class: "bg-blue-500" },
  { id: "green", label: "Green", class: "bg-emerald-500" },
  { id: "rose", label: "Rose", class: "bg-rose-500" },
  { id: "amber", label: "Amber", class: "bg-amber-500" },
  { id: "cyan", label: "Cyan", class: "bg-cyan-500" },
];

export function ThemePicker() {
  const { color, setColor } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Pick theme"
          className="grid place-items-center size-10 rounded-xl glass hover:shadow-glow transition-shadow"
        >
          <Palette className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => setColor(t.id)}
            className={cn(
              "cursor-pointer flex items-center justify-between",
              color === t.id && "bg-accent"
            )}
          >
            <div className="flex items-center gap-2">
              <span className={cn("size-3 rounded-full", t.class)} />
              <span className="text-sm">{t.label}</span>
            </div>
            {color === t.id && <Check className="size-3.5" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
