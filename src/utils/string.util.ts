export function chunkString(str: string, chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.substring(i, chunkSize));
  }
  return chunks;
}
