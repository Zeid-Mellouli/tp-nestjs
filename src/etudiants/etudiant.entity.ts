import { ApiProperty } from '@nestjs/swagger';

export class Etudiant {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Ali' })
  nom: string;

  @ApiProperty({ example: 'Info' })
  filiere: string;
}
