import { UserEntity } from 'src/Users/user.entity';
import { OrderDetailsEntity } from './orderDetails.entity';
export declare class OrdersEntity {
    id: string;
    date: Date;
    user: UserEntity;
    ordersDetail: OrderDetailsEntity;
}
