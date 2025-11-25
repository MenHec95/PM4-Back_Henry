import { CategoryEntity } from 'src/categories/entities/categories.entity';
import { OrderDetailsEntity } from 'src/orders/entities/orderDetails.entity';
export declare class ProductsEntity {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: CategoryEntity;
    orderDetail: OrderDetailsEntity[];
}
