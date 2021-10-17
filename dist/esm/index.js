function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Class to build and concatenate multipart form data
 */
export default class MultiData {
  /**
   * @param boundary The string used to define multipart boundaries and the end of body.
   */
  constructor(boundary) {
    _defineProperty(this, "boundary", void 0);

    _defineProperty(this, "lines", []);

    if (boundary === undefined) throw new TypeError("boundary expected");
    this.boundary = boundary;
  }
  /**
   * Append a part to the multipart form data.
   *
   * @param name The part name.
   * @param data The part data.
   * @param options Pass headers in the options for custom part headers.
   */


  append(name, data, options) {
    if (name === undefined) throw new TypeError("name expected");
    if (data === undefined) throw new TypeError("data expected");
    this.lines.push(`--${this.boundary}`);
    this.lines.push(`Content-Disposition: form-data; name="${name}"`);

    if (options && options.headers) {
      const headers = options.headers;

      for (const key in headers) this.lines.push(`${key}: ${headers[key]}`);
    }

    this.lines.push("");
    this.lines.push(data);
    return this;
  }
  /**
   * After appending data, use toString() to concatenate the form data for your request.
   */


  toString() {
    this.lines.push(`--${this.boundary}--`);
    const string = this.lines.join("\r\n");
    this.lines.pop();
    return string;
  }

}
//# sourceMappingURL=index.js.map