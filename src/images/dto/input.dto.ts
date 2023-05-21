import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class InputDto {
  @IsString()
  @IsNotEmpty({ message: 'image cannot be empty' })
  image: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  @IsNotEmpty({ message: 'compress cannot be empty' })
  compress: number;
}
