module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx}"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest",
	},
};
