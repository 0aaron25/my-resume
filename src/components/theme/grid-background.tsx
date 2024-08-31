import { cn } from "@/utils";
import { useTheme } from "./theme-provider";
import { useMemo } from "react";

type GridBackgroundProps = {
  children: React.ReactNode;
};

export default function GridBackground({ children }: GridBackgroundProps) {
  const { theme } = useTheme();

  const gridStyle = useMemo(() => {
    const color = theme === "light" ? "#E6E0E935" : "#2a2a2a15";
    return {
      backgroundImage: `
        linear-gradient(to right, ${color} 1px, transparent 1px),
        linear-gradient(to bottom, ${color} 1px, transparent 1px)
      `,
      backgroundSize: "14px 24px",
    };
  }, [theme]);

  return (
    <div
      className={cn("fixed inset-0 -z-10 h-full w-full bg-background")}
      style={gridStyle}
    >
      {children}
    </div>
  );
}
