import type { Config } from "tailwindcss";

// Shared utility palette adapted to Havillah's navy-and-green brand. These
// tokens support components absorbed from all three source projects without
// bringing their original company colours or logos into the site.
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { purple: { DEFAULT: "#082d50", deep: "#06233f", light: "#0c4169" }, orange: { DEFAULT: "#219b4b", light: "#58c45b" } },
        navy: { 950: "#061e35", 900: "#082d50", 800: "#0c4169", 700: "#17577e", 600: "#287398", 100: "#e4eef4" },
        green: { 700: "#167e3b", 600: "#219b4b", 400: "#58c45b", 100: "#e7f5eb" },
        emerald: { 700: "#167e3b", 600: "#219b4b" },
        gold: { 600: "#167e3b", 500: "#219b4b", 400: "#58c45b" },
        amber: { DEFAULT: "#219b4b", deep: "#167e3b", 100: "#e7f5eb", 300: "#a6dfb7", 400: "#58c45b", 500: "#219b4b" },
        sand: { DEFAULT: "#f6f9fb", 50: "#f6f9fb", 100: "#edf3f6", 200: "#dce6ec", 500: "#c4d2dc", 600: "#8da0af" },
        cream: "#f6f9fb",
        "cream-100": "#f6f9fb",
        "cream-300": "#dce6ec",
        ink: "#082d50",
        slate: "#667789",
        "warm-slate": "#667789",
        line: "#e2eaf0",
        paper: "#ffffff",
        "paper-soft": "#f6f9fb",
        coffee: { light: "#66818f", DEFAULT: "#31566c", deep: "#082d50" },
        "atlas-red": "#219b4b",
        "atlas-blue": "#082d50",
        "atlas-navy": "#061e35",
        "atlas-surface": "#0c4169",
        "white-soft": "#ffffff",
        "jbc-text": "#082d50",
        "jbc-muted": "#667789",
        "jbc-success": "#219b4b",
        "jbc-error": "#b5483f",
      },
      fontFamily: {
        display: ["Manrope", "DM Sans", "Georgia", "serif"],
        sans: ["DM Sans", "Arial", "sans-serif"],
        body: ["DM Sans", "Arial", "sans-serif"],
        label: ["DM Sans", "Arial", "sans-serif"],
      },
      maxWidth: { content: "1240px" },
      backdropBlur: { xs: "2px" },
      boxShadow: {
        glass: "0 8px 32px rgba(8, 45, 80, 0.12)",
        "glass-lg": "0 20px 60px -10px rgba(8, 45, 80, 0.22)",
        lift: "0 20px 45px -12px rgba(8, 45, 80, 0.22)",
        soft: "0 10px 30px -8px rgba(8, 45, 80, 0.12)",
        jbc: "0 14px 34px -12px rgba(8, 45, 80, 0.18)",
        "jbc-lg": "0 26px 60px -20px rgba(8, 45, 80, 0.24)",
        "jbc-press": "inset 0 2px 6px rgba(8, 45, 80, 0.12)",
      },
      borderRadius: { xl2: "1.25rem" },
      keyframes: {
        dash: { to: { strokeDashoffset: "-28" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        pulseSoft: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.4" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        floaty: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-14px)" } },
      },
      animation: {
        dash: "dash 2.4s ease forwards", fadeUp: "fadeUp 0.6s ease forwards",
        pulseSoft: "pulseSoft 2s ease-in-out infinite", marquee: "marquee 28s linear infinite", floaty: "floaty 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards", "flight-dash": "dash 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
