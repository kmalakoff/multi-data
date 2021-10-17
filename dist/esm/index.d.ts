export interface HeadersObject {
    [key: string]: string;
}
export interface Options {
    headers?: HeadersObject;
}
/**
 * Class to build and concatenate multipart form data
 */
export default class MultiData {
    readonly boundary: string;
    protected lines: string[];
    /**
     * @param boundary The string used to define multipart boundaries and the end of body.
     */
    constructor(boundary: string);
    /**
     * Append a part to the multipart form data.
     *
     * @param name The part name.
     * @param data The part data.
     * @param options Pass headers in the options for custom part headers.
     */
    append(name: string, data: string, options?: Options): MultiData;
    /**
     * After appending data, use toString() to concatenate the form data for your request.
     */
    toString(): string;
}
