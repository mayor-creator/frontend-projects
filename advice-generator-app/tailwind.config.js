/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-cyan": "hsl(193, 38%, 86%)",
				"neon-green": "hsl(150, 100%, 66%)",
				"grayish-blue": "hsl(217, 19%, 38%)",
				"dark-grayish-blue": "hsl(217, 19%, 24%)",
				"dark-blue": "hsl(218, 23%, 16%)",
			},
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
			},
			screens: {
				sm: { max: "640px" },
				// => @media (max-width: 640px)

				md: { min: "768px", max: "1023px" },
				// => @media (min-width: 768px and max-width: 1023px) { ... }

				lg: { min: "1024px", max: "1279px" },
				// => @media (min-width: 1024px and max-width: 1279px) { ... }

				xl: { min: "1280px", max: "1535px" },
				// => @media (min-width: 1280px and max-width: 1535px) { ... }

				"2xl": { min: "1536px" },
				// => @media (min-width: 1536px) { ... }
			},
		},
	},
	plugins: [],
};
