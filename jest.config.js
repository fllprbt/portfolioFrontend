module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.index.{js,jsx,ts,tsx}",
    "!src/**/*.{test,spec}.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/setupTests.ts"
  ],
  testEnvironment: "jsdom",
  testURL: "http://localhost",
  testMatch: ["<rootDir>/src/**/*(*.)(spec|test).{js,jsx,ts,tsx}"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": require.resolve("ts-jest"),
    "^.+\\.(css|scss)$": require.resolve(
      "react-scripts/config/jest/cssTransform.js"
    ),
    "^(?!.*\\.(js|jsx|ts|tsx|css|scss|json)$)": require.resolve(
      "react-scripts/config/jest/fileTransform.js"
    )
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^.+\\.module\\.s?css$": "identity-obj-proxy"
  },
  coverageDirectory: "./reports/coverage/"
};
