import assert from "assert";
import MultiData from "multi-data";
import encodeUTF8 from "../lib/encodeUTF8.cjs";

describe("form-data", function () {
  describe("constructor", function () {
    it("Error: constructor expects a boundary", function () {
      assert.throws(() => new MultiData(undefined));
    });

    it("boundary", function () {
      const boundary = "test-boundary";
      const form = new MultiData(boundary);
      assert.equal(form.boundary, boundary);
    });
  });

  describe("toString", function () {
    it("no append", function () {
      const boundary = "test-boundary";
      const form = new MultiData(boundary);
      assert.equal(form.toString(), `--${boundary}--`);
    });
  });

  describe("append", function () {
    it("Error: append expects a name", function () {
      const boundary = "test-boundary";
      const form = new MultiData(boundary);
      assert.throws(() => form.append(undefined, "some data"));
    });

    it("Error: append expects data", function () {
      const boundary = "test-boundary";
      const form = new MultiData(boundary);
      assert.throws(() => form.append("section1", undefined));
    });

    it("append", function () {
      const boundary = "test-boundary";
      const form = new MultiData(boundary);
      form.append("section1", "some data");
      assert.equal(
        form.toString(),
        [`--${boundary}`, 'Content-Disposition: form-data; name="section1"', "", "some data", `--${boundary}--`].join(
          "\r\n"
        )
      );
    });

    it("append binary", function () {
      const boundary = "test-boundary";
      const form = new MultiData(boundary);
      form.append("section1", encodeUTF8("some data"));
      assert.equal(
        form.toString(),
        [
          `--${boundary}`,
          'Content-Disposition: form-data; name="section1"',
          "",
          encodeUTF8("some data").toString(),
          `--${boundary}--`,
        ].join("\r\n")
      );
    });

    it("append with headers", function () {
      const boundary = "test-boundary";
      const form = new MultiData(boundary);
      form.append("section1", "some data", {
        headers: { "some-header": "header-value" },
      });
      assert.equal(
        form.toString(),
        [
          `--${boundary}`,
          'Content-Disposition: form-data; name="section1"',
          "some-header: header-value",
          "",
          "some data",
          `--${boundary}--`,
        ].join("\r\n")
      );
    });
  });
});
