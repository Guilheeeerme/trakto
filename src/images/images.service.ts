import { Injectable } from '@nestjs/common';

import { AddImageDataDto } from './dto/add-image.dto';
import { IImageResponse } from './interfaces/image-response.interface';
import { ImagesRepository } from '../database/repositories/images/images.repository';

@Injectable()
export class ImagesService {
  constructor(private readonly imagesRepo: ImagesRepository) {}

  public async add(data: AddImageDataDto): Promise<IImageResponse> {
    return await this.imagesRepo.add(data);
  }
}
