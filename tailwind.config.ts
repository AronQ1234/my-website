import type { Config } from "tailwindcss"
import { blackA, mauve, violet } from "@radix-ui/colors";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        ...blackA,
        ...violet,
        ...mauve,
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
        "slideDownAndFade": {
					from: { opacity: "0", transform: "translateY(-2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				"slideLeftAndFade": {
					from: { opacity: "0", transform: "translateX(2px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				"slideUpAndFade": {
					from: { opacity: "0", transform: "translateY(2px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				"slideRightAndFade": {
					from: { opacity: "0", transform: "translateX(-2px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slideDownAndFade":
					"slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slideLeftAndFade":
					"slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slideUpAndFade": "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				"slideRightAndFade":
					"slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ff0000, #ff0042, #fe0071, #e3009e, #b400c6, #8e50e5, #5d72f8, #008bff, #00b2ff, #00d0f8, #00e5a0, #0df002)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config