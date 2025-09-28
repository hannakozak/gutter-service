/* eslint-disable import/no-default-export */
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"brand-dark": "#0F2838",
				"brand-green": "#156C5D",
			},
			backgroundImage: {
				roof: "url('/images/green-roof.png')",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
