import { IsUUID } from 'class-validator';

export class idDto {
  @IsUUID('all', { message: 'El id debe ser un UUID valido' })
  id: string;
}
