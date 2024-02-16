import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  Max,
  Min,
} from 'class-validator';

export class InputDto {
  @IsString()
  @IsNotEmpty({ message: 'image cannot be empty' })
  @Matches(/^(http|https):\/\/[^\s\/$.?#].[^\s]*\.(jpg|jpeg|png)$/, {
    message:
      'Must be an image URL with one of the following extensions: .jpg, .jpeg, or .png',
  })
  image: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty({ message: 'compress cannot be empty' })
  compress: number;
}
