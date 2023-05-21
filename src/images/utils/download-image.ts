import { promises as fs } from 'fs';

export const downloadImage = async (url, path) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await fs.writeFile(path, buffer);

  return buffer;
};
