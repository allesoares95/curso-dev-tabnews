const dotenv = require("dotenv");
dotenv.config({ path: ".env.development" });

// Jest configuration file for Next.js projects
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});

// Export the Jest configuration
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});

module.exports = jestConfig;
