import { OrdersEntity } from 'src/orders/entities/orders.entity';
export declare class createUserDto {
    email: string;
    name: string;
    password: string;
    passwordRepeat: string;
    address: string;
    phone: number;
    country?: string;
    city?: string;
}
export declare class UserResponseDto {
    id: string;
    name: string;
    email: string;
    phone: number;
    country?: string;
    address: string;
    city?: string;
    orders: OrdersEntity[];
}
