import { IImageResponse } from './image-response.interface';
import { AddImageDataDto } from '../dto/add-image.dto';

export interface IImageRepository {
  add(data: AddImageDataDto): Promise<IImageResponse>;
}
