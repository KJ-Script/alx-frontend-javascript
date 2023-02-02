export default function createInt8TypedArray(length, position, value) {
  if (position >= length) return new Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  int8view[position] = value;

  return buffer;
}
