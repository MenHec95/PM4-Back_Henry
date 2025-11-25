import { OrdersEntity } from 'src/orders/entities/orders.entity';
export declare class UserEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    country: string;
    address: string;
    city: string;
    admin: string;
    orders: OrdersEntity[];
}
