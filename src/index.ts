export interface HeadersObject {
  [key: string]: string;
}

export interface Options {
  headers?: HeadersObject;
}

export interface Splittable<T> {
  slice(idx: number, len?: number): this;
  [idx: number]: T;
  readonly length: number;
}

/**
 * Class to build and concatenate multipart form data
 */
export default class MultiData {
  readonly boundary: string;
  protected lines: string[] = [];

  /**
   * @param boundary The string used to define multipart boundaries and the end of body.
   */
  constructor(boundary: string) {
    if (boundary === undefined) throw new TypeError('boundary expected');
    this.boundary = boundary;
  }

  /**
   * Append a part to the multipart form data.
   *
   * @param name The part name.
   * @param data The part data.
   * @param options Pass headers in the options for custom part headers.
   */
  append<T>(name: string, data: Splittable<T>, options?: Options): MultiData {
    if (name === undefined) throw new TypeError('name expected');
    if (data === undefined) throw new TypeError('data expected');

    this.lines.push(`--${this.boundary}`);
    this.lines.push(`Content-Disposition: form-data; name="${name}"`);
    if (options && options.headers) {
      const headers = options.headers;
      for (const key in headers) this.lines.push(`${key}: ${headers[key]}`);
    }
    this.lines.push('');
    this.lines.push(data.toString());
    return this;
  }

  /**
   * After appending data, use toString() to concatenate the form data for your request.
   */
  toString(): string {
    this.lines.push(`--${this.boundary}--`);
    const string = this.lines.join('\r\n');
    this.lines.pop();
    return string;
  }
}
