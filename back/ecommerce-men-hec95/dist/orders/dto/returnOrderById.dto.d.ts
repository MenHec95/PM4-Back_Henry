import { OrdersEntity } from '../entities/orders.entity';
export declare class ReturnOrderByIdDto {
    order: string;
    orderDetailComplete: OrdersEntity;
    orderDetail: string[];
}
