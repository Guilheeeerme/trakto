import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IImageRepository } from '../../../images/interfaces/image-repository.interface';
import { IImageResponse } from '../../../images/interfaces/image-response.interface';
import { ImageInterface } from '../../interfaces/image/image.interface';
import { AddImageDataDto } from '../../../images/dto/add-image.dto';
import { Image } from '../../../database/schemas/image/image.schema';

@Injectable()
export class ImagesRepository implements IImageRepository {
  constructor(
    @InjectModel(Image.name)
    private readonly imageCollection: Model<ImageInterface>,
  ) {}

  public async add(data: AddImageDataDto): Promise<IImageResponse> {
    const addImageDataDto = await this.imageCollection.create(data);

    await addImageDataDto.save();

    const imageResponse = {
      localpath: {
        original: addImageDataDto.localpath.original,
        thumb: addImageDataDto.localpath.thumb,
      },
      metadata: {
        ALL_EXIF_DATA_KEY: addImageDataDto.metadata.ALL_EXIF_DATA_KEY,
      },
    };

    return imageResponse;
  }
}
