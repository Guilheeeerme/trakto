import * as sharp from 'sharp';

export const getMetadata = async (imagePath) => {
  try {
    return await sharp(imagePath).metadata();
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }

  return null;
};
