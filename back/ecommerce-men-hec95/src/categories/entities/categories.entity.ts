import { ProductsEntity } from 'src/Products/products.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class CategoryEntity {
  /**
   * UUID de Category
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Nombre de categoria
   */
  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  name: string;

  /**
   * Relacion con tabla Products
   */
  @OneToMany(() => ProductsEntity, (productsEntity) => productsEntity.category)
  products: ProductsEntity[];
}
