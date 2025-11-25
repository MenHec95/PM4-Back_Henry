import { OrdersEntity } from './orders.entity';
import { ProductsEntity } from 'src/Products/products.entity';
export declare class OrderDetailsEntity {
    id: string;
    price: number;
    order: OrdersEntity;
    product: ProductsEntity[];
}
