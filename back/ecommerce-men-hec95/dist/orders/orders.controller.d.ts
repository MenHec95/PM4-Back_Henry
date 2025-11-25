import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { ReturnOrderDto } from './dto/returnOrder.dto';
import { ReturnOrderByIdDto } from './dto/returnOrderById.dto';
import { idDto } from 'src/utils/DTOs/id.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    addOrder(createOrder: CreateOrderDto): Promise<ReturnOrderDto>;
    getOrder(Params: idDto): Promise<ReturnOrderByIdDto>;
}
