import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // O Render vai injetar a porta aqui. Se estiver rodando local, usa a 3000.
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`Aplicação rodando na porta: ${port}`);
}
bootstrap();
