/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#102033",
          soft: "#24374A",
          muted: "#667789",
        },
        felt: {
          DEFAULT: "#126B5B",
          dark: "#0C5147",
          light: "#E4F1ED",
        },
        brass: {
          DEFAULT: "#B88A45",
          light: "#F2E8D7",
        },
        canvas: "#F6F7F5",
        surface: "#FFFFFF",
        line: "#E1E6E8",
      },
      fontFamily: {
        sans: ["DM Sans", "Aptos", "Segoe UI", "sans-serif"],
        display: ["Manrope", "DM Sans", "Aptos", "sans-serif"],
        heading: ["Manrope", "DM Sans", "Aptos", "sans-serif"],
      },
      fontSize: {
        "fluid-xs": ["clamp(0.75rem, 0.72rem + 0.15vw, 0.875rem)", { lineHeight: "1.5" }],
        "fluid-sm": ["clamp(0.875rem, 0.84rem + 0.18vw, 1rem)", { lineHeight: "1.55" }],
        "fluid-base": ["clamp(1rem, 0.94rem + 0.3vw, 1.125rem)", { lineHeight: "1.65" }],
        "fluid-lg": ["clamp(1.125rem, 1rem + 0.55vw, 1.375rem)", { lineHeight: "1.4" }],
        "fluid-xl": ["clamp(1.375rem, 1.1rem + 1.1vw, 1.875rem)", { lineHeight: "1.25" }],
        "fluid-2xl": ["clamp(1.75rem, 1.2rem + 2.1vw, 2.75rem)", { lineHeight: "1.12" }],
        "fluid-3xl": ["clamp(2.25rem, 1.35rem + 3.5vw, 4rem)", { lineHeight: "1.05" }],
      },
      spacing: {
        gutter: "clamp(1rem, 4vw, 4rem)",
        section: "clamp(3.5rem, 8vw, 7rem)",
      },
      boxShadow: {
        card: "0 12px 36px -20px rgb(16 32 51 / 22%)",
        float: "0 24px 70px -35px rgb(16 32 51 / 34%)",
      },
      animation: {
        shimmer: "shimmer 1.6s linear infinite",
      },
      keyframes: {
        shimmer: {
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
