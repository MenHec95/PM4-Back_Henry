import { CategoryEntity } from 'src/categories/entities/categories.entity';
import { OrderDetailsEntity } from 'src/orders/entities/orderDetails.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class ProductsEntity {
  /**
   * UUID de producto
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Nombre de producto
   */
  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  name: string;

  /**
   * Descripcion de producto
   */
  @Column({ type: 'text', nullable: false })
  description: string;

  /**
   * Precio de producto
   */
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  /**
   * stock disponible de producto
   */
  @Column({ type: 'int', nullable: false })
  stock: number;

  /**
   * Url de imagen del procducto
   */
  @Column({
    type: 'varchar',
    default: 'https://cdn-icons-png.flaticon.com/512/32/32345.png',
  })
  imgUrl: string;

  /**
   * Relacion con tabla Category
   */
  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    cascade: true,
  })
  category: CategoryEntity;

  /**
   * Relacion con tabla OrderDetail
   */
  @ManyToMany(() => OrderDetailsEntity, (orderDetail) => orderDetail.product, {
    cascade: true,
  })
  @JoinTable()
  orderDetail: OrderDetailsEntity[];
}
