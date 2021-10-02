/* eslint-disable mocha/no-exports,@typescript-eslint/no-var-requires */
var { assert } = require("chai");

module.exports = function tests(MultiData) {
  it("was exported", function () {
    const boundary = "test-boundary";
    const form = new MultiData(boundary);
    assert.equal(form.toString(), `--${boundary}--`);
  });
};
