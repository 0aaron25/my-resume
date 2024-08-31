import { useTheme } from "./theme-provider";
import { Moon } from "./moon";
import { Sun } from "./sun";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="hover:opacity-80"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
