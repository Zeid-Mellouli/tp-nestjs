import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEtudiantDto } from './create-etudiant.dto.js';
import { Etudiant } from './etudiant.entity.js';
import { EtudiantsService } from './etudiants.service.js';

@ApiTags('etudiants')
@Controller('etudiants')
export class EtudiantsController {
  constructor(private readonly etudiantsService: EtudiantsService) {}

  @Get()
  @ApiOperation({ summary: 'Lister les étudiants' })
  @ApiResponse({ status: 200, description: 'Liste des étudiants', type: [Etudiant] })
  findAll(): Etudiant[] {
    return this.etudiantsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un étudiant par son id' })
  @ApiResponse({ status: 200, description: "L'étudiant demandé", type: Etudiant })
  @ApiResponse({ status: 404, description: 'Étudiant introuvable' })
  findOne(@Param('id', ParseIntPipe) id: number): Etudiant {
    const etudiant = this.etudiantsService.findOne(id);
    if (!etudiant) {
      throw new NotFoundException(`Étudiant ${id} introuvable`);
    }
    return etudiant;
  }

  @Post()
  @ApiOperation({ summary: 'Ajouter un étudiant' })
  @ApiResponse({ status: 201, description: 'Étudiant créé', type: Etudiant })
  create(@Body() dto: CreateEtudiantDto): Etudiant {
    return this.etudiantsService.create(dto);
  }
}
