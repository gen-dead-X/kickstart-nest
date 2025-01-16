import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();

  await app.listen(config.app.port);
  console.log(
    `⚡️ Application is running on: http://localhost:${config.app.port} ⚡️`,
  );
}
bootstrap();
