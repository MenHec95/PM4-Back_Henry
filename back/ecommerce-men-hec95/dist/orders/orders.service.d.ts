import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';
import { ReturnOrderDto } from './dto/returnOrder.dto';
import { ReturnOrderByIdDto } from './dto/returnOrderById.dto';
export declare class OrdersService {
    private readonly orderRepository;
    constructor(orderRepository: OrdersRepository);
    addOrder(createOrder: CreateOrderDto): Promise<ReturnOrderDto>;
    getOrder(orderId: string): Promise<ReturnOrderByIdDto>;
}
