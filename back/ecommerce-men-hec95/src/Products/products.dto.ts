import { IsNotEmpty, IsNumber, IsString, IsUrl, Length } from 'class-validator';

export class productDto {
  /**
   * Nombre de producto
   * @example G45
   */
  @IsNotEmpty({ message: 'El nombre no puede estar vacio' })
  @Length(3, 80, { message: 'El nombre debe tener entre 3 y 80 Caracteres' })
  @IsString()
  name: string;

  /**
   * Descripcion de producto
   * @example Auricular
   */
  @IsNotEmpty()
  @IsString()
  description: string;

  /**
   * Precio de producto
   * @example 500
   */
  @IsNumber()
  @IsNotEmpty()
  price: number;

  /**
   * Stock disponible de producto
   * @example 25
   */
  @IsNumber()
  @IsNotEmpty()
  stock: number;

  /**
   * Url de imagen del producto
   * @example www.url.com
   */
  @IsUrl()
  imgUrl: string;

  /**
   * Categoria de producto
   * @example Audio
   */
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  category: string;
}
