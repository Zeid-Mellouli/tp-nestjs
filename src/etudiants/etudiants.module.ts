import { Module } from '@nestjs/common';
import { EtudiantsController } from './etudiants.controller.js';
import { EtudiantsService } from './etudiants.service.js';

@Module({
  controllers: [EtudiantsController],
  providers: [EtudiantsService],
})
export class EtudiantsModule {}
