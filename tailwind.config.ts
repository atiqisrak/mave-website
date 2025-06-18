import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#FFF4DC",
          100: "#FFF4DC", 
          200: "#FFF4DC",
          300: "#FFF4DC",
          400: "#FFF4DC",
          500: "#FEE9B6",
          600: "#E3A611",
          700: "#FCB813",
          800: "#E3A611",
          900: "#FCB813",
        },
        glass: {
          light: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(0, 0, 0, 0.1)",
          border: "rgba(255, 255, 255, 0.2)",
        }
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
        'graphik': ['Graphik', 'Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-2': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-3': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-large': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-bold': ['1rem', { lineHeight: '1.5', fontWeight: '700' }],
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
};

export default config;
