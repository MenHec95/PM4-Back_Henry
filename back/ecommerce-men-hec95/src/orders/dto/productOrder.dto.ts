import { IsNotEmpty, IsUUID } from 'class-validator';

export class productOrderDto {
  /**
   * UUID de producto
   */
  @IsNotEmpty({ message: 'El ID del producto es obligatorio' })
  @IsUUID()
  id: string;
}
