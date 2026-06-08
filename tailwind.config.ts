import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        "ink-2": "#1a1a1a",
        muted: "#6b7280",
        "muted-2": "#9ca3af",
        line: "#e7e7e9",
        "bg-soft": "#f6f6f7",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Noto Sans JP", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
