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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var MultiData = /*#__PURE__*/ function() {
    "use strict";
    function MultiData(boundary) {
        _class_call_check(this, MultiData);
        _define_property(this, "boundary", void 0);
        _define_property(this, "lines", []);
        if (boundary === undefined) throw new TypeError("boundary expected");
        this.boundary = boundary;
    }
    _create_class(MultiData, [
        {
            /**
   * Append a part to the multipart form data.
   *
   * @param name The part name.
   * @param data The part data.
   * @param options Pass headers in the options for custom part headers.
   */ key: "append",
            value: function append(name, data, options) {
                if (name === undefined) throw new TypeError("name expected");
                if (data === undefined) throw new TypeError("data expected");
                this.lines.push("--".concat(this.boundary));
                this.lines.push('Content-Disposition: form-data; name="'.concat(name, '"'));
                if (options && options.headers) {
                    var headers = options.headers;
                    for(var key in headers)this.lines.push("".concat(key, ": ").concat(headers[key]));
                }
                this.lines.push("");
                this.lines.push(data);
                return this;
            }
        },
        {
            /**
   * After appending data, use toString() to concatenate the form data for your request.
   */ key: "toString",
            value: function toString() {
                this.lines.push("--".concat(this.boundary, "--"));
                var string = this.lines.join("\r\n");
                this.lines.pop();
                return string;
            }
        }
    ]);
    return MultiData;
}();
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }