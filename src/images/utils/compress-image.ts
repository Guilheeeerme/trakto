import { promises as fs } from 'fs';
import Jimp from 'jimp';

export const compressImage = async (
  urlImage: string,
  originalImagePath: string,
  buffer: Buffer,
  compressionFactor: number,
) => {
  try {
    const image = await Jimp.read(urlImage.toString());
    const imgHeight = image.getHeight();
    const imgWidth = image.getWidth();
    const maxSize = 720;

    if (imgHeight < maxSize && imgWidth < maxSize) {
      return await fs.writeFile(`${originalImagePath}_thumb.jpg`, buffer);
    }

    if (imgWidth > imgHeight) {
      image
        .resize(maxSize, Jimp.AUTO)
        .quality(Math.ceil(compressionFactor))
        .write(`${originalImagePath}_thumb.jpg`);
    } else {
      image
        .resize(Jimp.AUTO, maxSize)
        .quality(Math.ceil(compressionFactor))
        .write(`${originalImagePath}_thumb.jpg`);
    }

    return;
  } catch (error) {
    return error;
  }
};
