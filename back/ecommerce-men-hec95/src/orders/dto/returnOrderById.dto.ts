// import { OrderDetailsEntity } from '../entities/orderDetails.entity';
import { OrdersEntity } from '../entities/orders.entity';

export class ReturnOrderByIdDto {
  /**
   * Orden de respuesta
   */
  order: string;
  /**
   * Detalles de la orden
   */
  orderDetailComplete: OrdersEntity;

  orderDetail: string[];
}
