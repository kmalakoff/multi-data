// Feature detection - no global modifications per polyfill-removal plans
const hasBuffer = typeof Buffer !== 'undefined';
const hasBufferFrom = hasBuffer && typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from;

function bufferFrom(data: string, encoding?: BufferEncoding): Buffer {
  if (hasBufferFrom) {
    return Buffer.from(data, encoding);
  }
  // Node 0.8-4.x compatibility: use Buffer constructor
  return new Buffer(data, encoding);
}

export default function encodeUTF8(s: string): Uint8Array {
  return hasBuffer ? new Uint8Array(bufferFrom(s, 'utf8')) : Uint8Array.from(s, (x: string) => x.charCodeAt(0));
}
