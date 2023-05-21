import { IsNotEmpty, IsObject } from 'class-validator';

export class AddImageDataDto {
  @IsObject()
  @IsNotEmpty({ message: 'localpath cannot be empty' })
  localpath: object;

  @IsObject()
  @IsNotEmpty({ message: 'metadata cannot be empty' })
  metadata: object;
}
