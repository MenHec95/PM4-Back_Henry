import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { productOrderDto } from './productOrder.dto';

export class CreateOrderDto {
  /**
   * UUID de usuario
   */
  @IsNotEmpty({ message: 'Se requiere ID' })
  @IsUUID()
  userID: string;

  /**
   * Lista de productos a agregar a la Orden de compra
   */
  @IsArray({ message: 'Debe ser un array de Productos' })
  @ArrayMinSize(1, { message: 'Debe tener almenos un elemento' })
  @Type(() => productOrderDto)
  products: productOrderDto[];
}
