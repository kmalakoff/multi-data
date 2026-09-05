import { bufferFrom } from './compat.ts';

const hasBuffer = typeof Buffer !== 'undefined';

export default function encodeUTF8(s: string): Uint8Array {
  return hasBuffer ? new Uint8Array(bufferFrom(s, 'utf8')) : Uint8Array.from(s, (x: string) => x.charCodeAt(0));
}
