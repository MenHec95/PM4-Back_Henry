import { UserEntity } from 'src/Users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderDetailsEntity } from './orderDetails.entity';

@Entity('orders')
export class OrdersEntity {
  /**
   * UUID de Orden
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * fecha de orden
   */
  @Column('date')
  date: Date;

  /**
   * Relacion con tabla User
   */
  @ManyToOne(() => UserEntity, (user) => user.orders, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: UserEntity;

  /**
   * Relacion con tabla OrderDetails
   */
  @OneToOne(() => OrderDetailsEntity, (orderDetails) => orderDetails.order)
  @JoinColumn()
  ordersDetail: OrderDetailsEntity;
}
