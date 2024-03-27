/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Outfit", "sans-serif"],
			},
			colors: {
				"light-gray": "#D5E1EF",
				"grayish-blue": "hsl(220, 15%, 55%)",
				"dark-blue": "hsl(218, 44%, 22%)",
				"dark-navy": "#1F314F",
			},
		},
	},
	plugins: [],
};
