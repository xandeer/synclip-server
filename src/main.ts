import { NestFactory } from '@nestjs/core';
import { address as getIpAddress } from 'ip';
import { AppModule } from './app.module';

const PORT = 3_000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(`Listen on http://${getIpAddress()}:${PORT}`);
}
bootstrap();
