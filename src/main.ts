import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import config from './config/config';
import { AllConfigType } from './config/config.type';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService<AllConfigType>);

  app.enableShutdownHooks();

  // Use configService if needed
  await app.listen(config.app.port);
  console.log(
    `⚡️ Application is running on: http://localhost:${config.app.port} ⚡️`,
  );
}
bootstrap();
