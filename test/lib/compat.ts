/**
 * Compatibility Layer for Node.js 0.8+
 * Local to this package - contains only needed functions.
 */

const hasBufferFrom = typeof Buffer !== 'undefined' && typeof Buffer.from === 'function' && Buffer.from !== Uint8Array.from;

export function bufferFrom(data: string, encoding?: BufferEncoding): Buffer {
  if (hasBufferFrom) {
    return Buffer.from(data, encoding);
  }
  // Node 0.8-4.x compatibility: use Buffer constructor
  return new Buffer(data, encoding);
}
