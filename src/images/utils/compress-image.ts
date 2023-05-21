import * as sharp from 'sharp';
import { promises as fs } from 'fs';

export const compressImage = async (
  originalImagePath: string,
  buffer: Buffer,
  metadata,
  compressionFactor: number,
) => {
  try {
    if (metadata.height === 720 && metadata.width === 1280) {
      await fs.writeFile(`${originalImagePath}_thumb.jpg`, buffer);

      return;
    }

    await sharp(`${originalImagePath}.jpg`)
      .resize({
        width: 1280,
        height: 720,
      })
      .toFormat('jpg', {
        progressive: true,
        quality: Math.ceil(compressionFactor),
      })
      .toFile(`${originalImagePath}_thumb.jpg`);
  } catch (error) {
    console.log(error);
  }
};
