import { Repository } from 'typeorm';
import { OrderDetailsEntity } from './entities/orderDetails.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { ReturnOrderDto } from './dto/returnOrder.dto';
import { OrdersEntity } from './entities/orders.entity';
import { UserEntity } from 'src/Users/user.entity';
import { ProductsEntity } from 'src/Products/products.entity';
import { ReturnOrderByIdDto } from './dto/returnOrderById.dto';
export declare class OrdersRepository {
    private readonly orderRepo;
    private readonly orderDetailsRepo;
    private readonly UsersRepo;
    private readonly productRepo;
    constructor(orderRepo: Repository<OrdersEntity>, orderDetailsRepo: Repository<OrderDetailsEntity>, UsersRepo: Repository<UserEntity>, productRepo: Repository<ProductsEntity>);
    addOrder(createOrder: CreateOrderDto): Promise<ReturnOrderDto>;
    getOrder(orderId: string): Promise<ReturnOrderByIdDto>;
}
