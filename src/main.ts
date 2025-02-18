import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * The bootstrap function is the entry point of the NestJS application.
 * It initializes and starts the NestJS application instance.
 * This function is asynchronous, allowing for setup processes before the application starts listening for requests.
 *
 * @async
 * @function bootstrap
 * @returns A Promise that resolves when the application has been successfully bootstrapped and started listening.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((err) => {
  console.error('Application bootstrap failed!', err);
});
