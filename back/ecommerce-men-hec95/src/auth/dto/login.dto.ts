import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length, Matches } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'prueba@prueba.com',
    description: 'Correo único del usuario',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Contrasena1!',
  })
  @Length(8, 15, { message: 'La contraseña debe tener 8 y 15 caracteres' })
  @Matches(/(?=.*[a-z])/, {
    message: 'La contraseña debe contener al menos una letra minúscula',
  })
  @Matches(/(?=.*[A-Z])/, {
    message: 'La contraseña debe contener al menos una letra mayúscula',
  })
  @Matches(/(?=.*\d)/, {
    message: 'La contraseña debe contener al menos un número',
  })
  @Matches(/(?=.*[!@#$%^&*])/, {
    message: 'Debe contener al menos un caracter especial (!@#$%^&*)',
  })
  password: string;
}
