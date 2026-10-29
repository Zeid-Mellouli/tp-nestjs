import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration de Swagger (documentation interactive de l'API)
  const config = new DocumentBuilder()
    .setTitle('TP NestJS - API Étudiants')
    .setDescription('Hello World et petite API de test documentée avec Swagger')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Serveur : http://localhost:${process.env.PORT ?? 3000}`);
  console.log(`Swagger : http://localhost:${process.env.PORT ?? 3000}/api`);
}
await bootstrap();
