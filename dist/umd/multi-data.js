(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.multiData = factory());
})(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
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

  /**
   * Class to build and concatenate multipart form data
   */
  var MultiData = /*#__PURE__*/function () {
    /**
     * @param boundary The string used to define multipart boundaries and the end of body.
     */
    function MultiData(boundary) {
      _classCallCheck(this, MultiData);

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


    _createClass(MultiData, [{
      key: "append",
      value: function append(name, data, options) {
        if (name === undefined) throw new TypeError("name expected");
        if (data === undefined) throw new TypeError("data expected");
        this.lines.push("--".concat(this.boundary));
        this.lines.push("Content-Disposition: form-data; name=\"".concat(name, "\""));

        if (options && options.headers) {
          var headers = options.headers;

          for (var _key in headers) {
            this.lines.push("".concat(_key, ": ").concat(headers[_key]));
          }
        }

        this.lines.push("");
        this.lines.push(data);
        return this;
      }
      /**
       * After appending data, use toString() to concatenate the form data for your request.
       */

    }, {
      key: "toString",
      value: function toString() {
        this.lines.push("--".concat(this.boundary, "--"));
        var string = this.lines.join("\r\n");
        this.lines.pop();
        return string;
      }
    }]);

    return MultiData;
  }();

  return MultiData;

}));
//# sourceMappingURL=multi-data.js.map
