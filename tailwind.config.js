/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx,mdx}", "./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F2EDE5",
        surface: "#FFFCF7",
        "surface-2": "#E9E0D4",
        sand: "#C4A786",
        gold: "#CB913C",
        "gold-dark": "#986328",
        sage: "#A4AE96",
        "sage-dark": "#66775B",
        ink: "#252320",
        muted: "#776C60",
        line: "#E5DCCF",
        error: "#B85C4A",
        success: "#66775B",
        "state-disabled": "#E9E0D4",
        "editorial-dark": "#2D2923",
        "editorial-mid": "#514332",
        "editorial-warm": "#86653D",
        "editorial-text": "#FFF8EE",
        "editorial-muted": "#E1D2BC",
        overlay: "rgb(37 35 32 / 58%)",
      },
      fontFamily: {
        sans: ["DM Sans", "Arial", "sans-serif"],
        display: ["Manrope", "DM Sans", "Arial", "sans-serif"],
        heading: ["Manrope", "DM Sans", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: ["var(--text-xs)", { lineHeight: "1.5" }],
        sm: ["var(--text-sm)", { lineHeight: "1.55" }],
        base: ["var(--text-base)", { lineHeight: "1.65" }],
        lg: ["var(--text-lg)", { lineHeight: "1.5" }],
        "heading-sm": ["var(--heading-sm)", { lineHeight: "1.25" }],
        "heading-md": ["var(--heading-md)", { lineHeight: "1.2" }],
        "heading-lg": ["var(--heading-lg)", { lineHeight: "1.1" }],
        "heading-xl": ["var(--heading-xl)", { lineHeight: "1.02" }],
      },
      maxWidth: {
        content: "var(--content-max)",
        reading: "68ch",
      },
      spacing: {
        gutter: "clamp(1rem, 4vw, 3.5rem)",
        section: "clamp(3.5rem, 8vw, 7rem)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        soft: "var(--shadow)",
        card: "0 16px 40px rgba(91, 66, 38, 0.08)",
        overlay: "0 28px 90px rgba(37, 35, 32, 0.2)",
      },
      transitionDuration: {
        fast: "var(--motion-fast)",
        normal: "var(--motion-normal)",
        slow: "var(--motion-slow)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
      },
      zIndex: {
        sticky: "20",
        header: "40",
        dropdown: "50",
        overlay: "100",
        toast: "120",
      },
      animation: {
        shimmer: "shimmer 1.5s linear infinite",
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
