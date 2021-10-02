/* eslint-disable mocha/no-setup-in-describe,@typescript-eslint/no-var-requires */
const tests = require("./shared/tests.cjs");
const MultiData = require("multi-data");

describe("require.test.cjs", function () {
  tests(MultiData);
});
