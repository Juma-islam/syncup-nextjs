import type { Config } from "tailwindcss";
// @ts-expect-error - daisyui might not have built-in types
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  // @ts-expect-error - ignoring daisyui specific config types
  daisyui: {
    themes: ["light"],
  },
} satisfies Config;

export default config;