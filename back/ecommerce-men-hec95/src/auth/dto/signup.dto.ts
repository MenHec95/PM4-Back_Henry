import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class SignupDto {
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'El nombre no puede estar vacio' })
  @Length(3, 80, { message: 'El nombre debe tener entre 3 y 80 Caracteres' })
  name: string;

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
  passwordRepeat: string;

  @Length(3, 80, {
    message: ' La direccion debe tener entre 3 y 80 caracteres',
  })
  address: string;

  @IsNotEmpty({ message: 'El numero de telefono no puede estar vacio' })
  @Transform(({ value }) => Number(value))
  @IsNumber()
  phone: number;

  @IsString({ message: 'El pais debe ser una cadena de texto' })
  @Length(5, 20, { message: 'El pais debe tener entre 5 y 20 caracteres' })
  country?: string;

  @IsString({ message: 'La ciudad debe ser una cadena de texto' })
  @Length(5, 20, { message: 'La ciudad debe tener entre 5 y 20 caracteres' })
  city?: string;
}
