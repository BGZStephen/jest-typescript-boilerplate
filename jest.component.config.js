const baseConfig = require("./jest.config");

module.exports = {
  ...baseConfig,
  testRegex: "\\.component.test\\.(js|ts)$",
};
