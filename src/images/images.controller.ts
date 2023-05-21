import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import * as exif from 'exif-reader';

import { ImagesService } from './images.service';
import { AddImageDataDto } from './dto/add-image.dto';
import { InputDto } from './dto/input.dto';
import { downloadImage } from './utils/download-image';
import { getMetadata } from './utils/get-metadata';
import { compressImage } from './utils/compress-image';

@Controller('image')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('save')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() data: InputDto): Promise<AddImageDataDto> {
    const originalImageName = new Date().getTime().toString();
    const originalImagePath = `./temp/${originalImageName}`;

    const buffer = await downloadImage(data.image, `${originalImagePath}.jpg`);
    const metadata = await getMetadata(`${originalImagePath}.jpg`);
    const exifMetadata = exif(metadata.exif);

    await compressImage(originalImagePath, buffer, metadata, data.compress);

    const response: AddImageDataDto = {
      localpath: {
        original: `${originalImagePath}.jpg`,
        thumb: `${originalImagePath}_thumb.jpg`,
      },
      metadata: {
        ALL_EXIF_DATA_KEY: exifMetadata,
      },
    };

    return await this.imagesService.add(response);
  }
}
