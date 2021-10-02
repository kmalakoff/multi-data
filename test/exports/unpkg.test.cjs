/* eslint-disable mocha/no-setup-in-describe,@typescript-eslint/no-var-requires */
const tests = require("./shared/tests.cjs");
const MultiData = require("multi-data/unpkg");

describe("unpkg.test.cjs", function () {
  tests(MultiData);
});
