import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "rgb(var(--md-sys-color-primary) / <alpha-value>)",
        "surface-tint": "rgb(var(--md-sys-color-surface-tint) / <alpha-value>)",
        "on-primary": "rgb(var(--md-sys-color-on-primary) / <alpha-value>)",
        "primary-container":
          "rgb(var(--md-sys-color-primary-container) / <alpha-value>)",
        "on-primary-container":
          "rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)",
        secondary: "rgb(var(--md-sys-color-secondary) / <alpha-value>)",
        "on-secondary": "rgb(var(--md-sys-color-on-secondary) / <alpha-value>)",
        "secondary-container":
          "rgb(var(--md-sys-color-secondary-container) / <alpha-value>)",
        "on-secondary-container":
          "rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)",
        tertiary: "rgb(var(--md-sys-color-tertiary) / <alpha-value>)",
        "on-tertiary": "rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)",
        "tertiary-container":
          "rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)",
        "on-tertiary-container":
          "rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)",
        error: "rgb(var(--md-sys-color-error) / <alpha-value>)",
        "on-error": "rgb(var(--md-sys-color-on-error) / <alpha-value>)",
        "error-container":
          "rgb(var(--md-sys-color-error-container) / <alpha-value>)",
        "on-error-container":
          "rgb(var(--md-sys-color-on-error-container) / <alpha-value>)",
        background: "rgb(var(--md-sys-color-background) / <alpha-value>)",
        "on-background":
          "rgb(var(--md-sys-color-on-background) / <alpha-value>)",
        surface: "rgb(var(--md-sys-color-surface) / <alpha-value>)",
        "on-surface": "rgb(var(--md-sys-color-on-surface) / <alpha-value>)",
        "surface-variant":
          "rgb(var(--md-sys-color-surface-variant) / <alpha-value>)",
        "on-surface-variant":
          "rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)",
        outline: "rgb(var(--md-sys-color-outline) / <alpha-value>)",
        "outline-variant":
          "rgb(var(--md-sys-color-outline-variant) / <alpha-value>)",
        shadow: "rgb(var(--md-sys-color-shadow) / <alpha-value>)",
        scrim: "rgb(var(--md-sys-color-scrim) / <alpha-value>)",
        "inverse-surface":
          "rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)",
        "inverse-on-surface":
          "rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)",
        "inverse-primary":
          "rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)",
        "primary-fixed":
          "rgb(var(--md-sys-color-primary-fixed) / <alpha-value>)",
        "on-primary-fixed":
          "rgb(var(--md-sys-color-on-primary-fixed) / <alpha-value>)",
        "primary-fixed-dim":
          "rgb(var(--md-sys-color-primary-fixed-dim) / <alpha-value>)",
        "on-primary-fixed-variant":
          "rgb(var(--md-sys-color-on-primary-fixed-variant) / <alpha-value>)",
        "secondary-fixed":
          "rgb(var(--md-sys-color-secondary-fixed) / <alpha-value>)",
        "on-secondary-fixed":
          "rgb(var(--md-sys-color-on-secondary-fixed) / <alpha-value>)",
        "secondary-fixed-dim":
          "rgb(var(--md-sys-color-secondary-fixed-dim) / <alpha-value>)",
        "on-secondary-fixed-variant":
          "rgb(var(--md-sys-color-on-secondary-fixed-variant) / <alpha-value>)",
        "tertiary-fixed":
          "rgb(var(--md-sys-color-tertiary-fixed) / <alpha-value>)",
        "on-tertiary-fixed":
          "rgb(var(--md-sys-color-on-tertiary-fixed) / <alpha-value>)",
        "tertiary-fixed-dim":
          "rgb(var(--md-sys-color-tertiary-fixed-dim) / <alpha-value>)",
        "on-tertiary-fixed-variant":
          "rgb(var(--md-sys-color-on-tertiary-fixed-variant) / <alpha-value>)",
        "surface-dim": "rgb(var(--md-sys-color-surface-dim) / <alpha-value>)",
        "surface-bright":
          "rgb(var(--md-sys-color-surface-bright) / <alpha-value>)",
        "surface-container-lowest":
          "rgb(var(--md-sys-color-surface-container-lowest) / <alpha-value>)",
        "surface-container-low":
          "rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)",
        "surface-container":
          "rgb(var(--md-sys-color-surface-container) / <alpha-value>)",
        "surface-container-high":
          "rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)",
        "surface-container-highest":
          "rgb(var(--md-sys-color-surface-container-highest) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
