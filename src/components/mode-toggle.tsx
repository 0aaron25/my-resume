import { Theme, useTheme } from "@/components/theme-provider";
import { Computer, Moon, Sun, LucideIcon } from "lucide-react";

const themes: { value: Theme; icon: LucideIcon }[] = [
  { value: "system", icon: Computer },
  { value: "light", icon: Sun },
  { value: "dark", icon: Moon },
];

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative flex items-center rounded-md p-1 w-fit border">
      {themes.map(({ value, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`z-10 p-2 transition-colors ${
            theme === value ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
      <div
        className="absolute inset-y-1 w-8 bg-blue-300 rounded-sm transition-transform duration-200"
        style={{
          transform: `translateX(${
            themes.findIndex((t) => t.value === theme) * 100
          }%)`,
        }}
      />
    </div>
  );
}
