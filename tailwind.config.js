/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["selector"],
	theme: {
		extend: {
			colors: {
				dark: "#1d232a",
				"dark-2": "#191E24",
				"dark-hv": "#383F47",
				"dark-text": "#1F2937",
				light: "#FFFFFF",
				"light-2": "#F2F2F2",
				"light-hv": "#D2D4D7",
				"light-text": "#A6ADBB",
			},
		},
	},
	plugins: [require("daisyui")],
};
