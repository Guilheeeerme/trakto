import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('API_PORT');

  await app.listen(port, () => {
    logger.log(`Server running at http://localhost:${port}`);
  });
}

bootstrap();
