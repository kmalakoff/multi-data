/* eslint-disable @typescript-eslint/no-var-requires */

function polyfill() {
  if (typeof Buffer !== 'undefined' && !Buffer.from) {
    Buffer.from = function from(data, encoding) {
      return new Buffer(data, encoding);
    };
  }
}
polyfill();
