import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#f5b038",
      secondary: "#f3fbbb",
      accent: "#df280c",
      content: "#010a18",
      background: "#fafcff",
      white: "#ffffff",
      gray: "#a9a9a9",
      black: "#0e0e10",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
