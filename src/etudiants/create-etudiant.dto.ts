import { ApiProperty } from '@nestjs/swagger';

export class CreateEtudiantDto {
  @ApiProperty({ example: 'Sarra', description: "Nom de l'étudiant" })
  nom: string;

  @ApiProperty({ example: 'Info', description: "Filière de l'étudiant" })
  filiere: string;
}
