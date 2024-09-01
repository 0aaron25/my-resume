import { useTheme } from "./theme-provider";
import { Moon } from "./moon";
import { Sun } from "./sun";

export function DarkMode() {
  const { theme, toggleDark } = useTheme();
  return (
    <button
      onClick={(e: React.MouseEvent) => toggleDark(e)}
      aria-label="Toggle theme"
      className="text-primary hover:text-on-background "
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
