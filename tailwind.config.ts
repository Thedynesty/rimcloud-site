import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07090e",
        foreground: "#f3f4f6",
        void: "#07090e",
        surface: {
          DEFAULT: "#0b0e14",
          card: "#0d121c",
          elevated: "#121824",
          border: "rgba(0, 240, 255, 0.12)",
          glass: "rgba(11, 14, 20, 0.75)",
        },
        cyan: {
          glow: "#00f0ff",
          DEFAULT: "#00d9ff",
          deep: "#0080ff",
          muted: "rgba(0, 240, 255, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "cyan-sm": "0 0 12px -2px rgba(0, 240, 255, 0.35)",
        "cyan-md": "0 0 24px -4px rgba(0, 240, 255, 0.45)",
        "cyan-lg": "0 0 48px -8px rgba(0, 240, 255, 0.55)",
        "blue-glow": "0 0 25px -5px rgba(0, 128, 255, 0.4)",
      },
      animation: {
        "radar-pulse": "radar 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "cyan-pulse": "pulseGlow 2s ease-in-out infinite",
        "scan-line": "scanline 8s linear infinite",
      },
      keyframes: {
        radar: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 8px rgba(0, 240, 255, 0.8))" },
          "50%": { opacity: "0.6", filter: "drop-shadow(0 0 2px rgba(0, 240, 255, 0.3))" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

