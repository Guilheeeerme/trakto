import { MongooseModule } from '@nestjs/mongoose';

import { Image, ImageSchema } from './image/image.schema';

export const schemas = [
  MongooseModule.forFeature([
    {
      name: Image.name,
      schema: ImageSchema,
    },
  ]),
];
