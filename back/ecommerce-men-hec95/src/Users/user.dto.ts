import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { OrdersEntity } from 'src/orders/entities/orders.entity';

export class createUserDto {
  @ApiProperty({
    example: 'prueba@prueba.com',
    description: 'Correo único del usuario',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Nombre',
    description: 'Nombre del usuario',
  })
  @IsNotEmpty({ message: 'El nombre no puede estar vacio' })
  @Length(3, 80, { message: 'El nombre debe tener entre 3 y 80 Caracteres' })
  name: string;

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
  passwordRepeat: string;

  @ApiProperty({
    example: 'Calle Falsa 1234',
    description: 'Direccion de Usuario',
  })
  @Length(3, 80, {
    message: ' La direccion debe tener entre 3 y 80 caracteres',
  })
  address: string;

  @ApiProperty({
    example: '1234567890',
    description: 'Numero de telefono de usuario',
  })
  @IsNotEmpty({ message: 'El numero de telefono no puede estar vacio' })
  @Transform(({ value }) => Number(value))
  @IsNumber()
  phone: number;

  @ApiProperty({
    example: 'Argentina',
    description: 'Pais del Usuario',
  })
  @IsString({ message: 'El pais debe ser una cadena de texto' })
  @Length(5, 20, { message: 'El pais debe tener entre 5 y 20 caracteres' })
  country?: string;

  @ApiProperty({
    example: 'Mendoza',
    description: 'Ciudad del Usuario',
  })
  @IsString({ message: 'La ciudad debe ser una cadena de texto' })
  @Length(5, 20, { message: 'La ciudad debe tener entre 5 y 20 caracteres' })
  city?: string;
}

export class UserResponseDto {
  /**
   * Id de Respuesta
   */
  id: string;
  /**
   * Nombre de usuario de respuesta
   */
  name: string;
  /**
   * Email de usuario de respuesta
   */
  email: string;
  /**
   * Numero de Telefono de usuario de respuesta
   */
  phone: number;

  /**
   * Pais de Usuario de respuesta
   */
  country?: string;

  /**
   * Direccion de usuario de respuesta
   */
  address: string;
  /**
   * ciudad de Usuario de respuesta
   */
  city?: string;

  /**
   * Relacion con tabla de Orders
   */
  orders: OrdersEntity[];
}
