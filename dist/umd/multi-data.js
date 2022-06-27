(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.multiData = factory());
})(this, (function () { 'use strict';

    /**
     * Class to build and concatenate multipart form data
     */
    var MultiData = /** @class */ (function () {
        /**
         * @param boundary The string used to define multipart boundaries and the end of body.
         */
        function MultiData(boundary) {
            this.lines = [];
            if (boundary === undefined)
                throw new TypeError('boundary expected');
            this.boundary = boundary;
        }
        /**
         * Append a part to the multipart form data.
         *
         * @param name The part name.
         * @param data The part data.
         * @param options Pass headers in the options for custom part headers.
         */
        MultiData.prototype.append = function (name, data, options) {
            if (name === undefined)
                throw new TypeError('name expected');
            if (data === undefined)
                throw new TypeError('data expected');
            this.lines.push("--".concat(this.boundary));
            this.lines.push("Content-Disposition: form-data; name=\"".concat(name, "\""));
            if (options && options.headers) {
                var headers = options.headers;
                for (var key in headers)
                    this.lines.push("".concat(key, ": ").concat(headers[key]));
            }
            this.lines.push('');
            this.lines.push(data);
            return this;
        };
        /**
         * After appending data, use toString() to concatenate the form data for your request.
         */
        MultiData.prototype.toString = function () {
            this.lines.push("--".concat(this.boundary, "--"));
            var string = this.lines.join('\r\n');
            this.lines.pop();
            return string;
        };
        return MultiData;
    }());

    return MultiData;

}));
//# sourceMappingURL=multi-data.js.map
