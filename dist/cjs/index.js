"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MultiData;
    }
});
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var MultiData = /*#__PURE__*/ function() {
    "use strict";
    function MultiData(boundary) {
        _classCallCheck(this, MultiData);
        this.lines = [];
        if (boundary === undefined) throw new TypeError("boundary expected");
        this.boundary = boundary;
    }
    var _proto = MultiData.prototype;
    /**
   * Append a part to the multipart form data.
   *
   * @param name The part name.
   * @param data The part data.
   * @param options Pass headers in the options for custom part headers.
   */ _proto.append = function append(name, data, options) {
        if (name === undefined) throw new TypeError("name expected");
        if (data === undefined) throw new TypeError("data expected");
        this.lines.push("--".concat(this.boundary));
        this.lines.push('Content-Disposition: form-data; name="'.concat(name, '"'));
        if (options === null || options === void 0 ? void 0 : options.headers) {
            var headers = options.headers;
            for(var key in headers)this.lines.push("".concat(key, ": ").concat(headers[key]));
        }
        this.lines.push("");
        this.lines.push(data);
        return this;
    };
    /**
   * After appending data, use toString() to concatenate the form data for your request.
   */ _proto.toString = function toString() {
        this.lines.push("--".concat(this.boundary, "--"));
        var string = this.lines.join("\r\n");
        this.lines.pop();
        return string;
    };
    return MultiData;
}();

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  for (var key in exports) exports.default[key] = exports[key];
  module.exports = exports.default;
}