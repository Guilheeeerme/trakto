import { Module } from '@nestjs/common';
import { schemas } from './schemas';

import { ImagesRepository } from './repositories/images/images.repository';

@Module({
  imports: [...schemas],
  providers: [ImagesRepository],
  exports: [ImagesRepository],
})
export class DatabaseModule {}
