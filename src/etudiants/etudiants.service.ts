import { Injectable } from '@nestjs/common';
import { CreateEtudiantDto } from './create-etudiant.dto.js';
import { Etudiant } from './etudiant.entity.js';

@Injectable()
export class EtudiantsService {
  // Stockage en mémoire : suffisant pour un test d'API (pas de base de données)
  private etudiants: Etudiant[] = [{ id: 1, nom: 'Ali', filiere: 'Info' }];
  private prochainId = 2;

  findAll(): Etudiant[] {
    return this.etudiants;
  }

  findOne(id: number): Etudiant | undefined {
    return this.etudiants.find((e) => e.id === id);
  }

  create(dto: CreateEtudiantDto): Etudiant {
    const etudiant: Etudiant = { id: this.prochainId++, ...dto };
    this.etudiants.push(etudiant);
    return etudiant;
  }
}
