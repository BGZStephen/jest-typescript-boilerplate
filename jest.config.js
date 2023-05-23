module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
  testEnvironment: "node",
  modulePaths: ["<rootDir>/src/"],
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/src/.*/__mocks__"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
  testPathIgnorePatterns: ["/_mocks_/", "/node_modules/"],
  coveragePathIgnorePatterns: [
    "/_mocks_/",
    "test-utils/",
    ".integration.test.ts",
    ".component.test.ts",
  ],
};
