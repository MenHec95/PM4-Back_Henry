import {
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrdersEntity } from './orders.entity';
import { ProductsEntity } from 'src/Products/products.entity';

@Entity('orderDetails')
export class OrderDetailsEntity {
  /**
   * UUID de cada detalle de Orden
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Precio Total de orden
   */
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  /**
   * Relacion con tabla Order
   */
  @OneToOne(() => OrdersEntity, (orders) => orders.ordersDetail)
  order: OrdersEntity;

  /**
   * relacion con tabla Producto
   */
  @ManyToMany(() => ProductsEntity, (products) => products.orderDetail)
  product: ProductsEntity[];
}
