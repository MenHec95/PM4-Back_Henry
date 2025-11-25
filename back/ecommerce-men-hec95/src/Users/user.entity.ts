import { OrdersEntity } from 'src/orders/entities/orders.entity';
import { Role } from 'src/role.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  /**
   * UUID unico de cada usuario
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Nombre del usuario obligatorio de maximo 50 caracteres
   * @example Pepito
   */
  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;

  /**
   * Email del Usuario, obligatorio, unico y maximo de 50 caracteres
   * @example pepito@email.com
   */
  @Column({ type: 'varchar', length: 50, unique: true, nullable: false })
  email: string;

  /**
   * Contraseña del Usuario, obligatoria minimo 8 caracteres, una mayuscula, minuscula, numero y caracter especial
   * @example Pep1t0!@
   */
  @Column({ type: 'varchar', nullable: false })
  password: string;

  /**
   * Numero de telefono de Usuario, obligatorio
   * @example 1122233444
   */
  @Column({ type: 'int', nullable: false })
  phone: number;

  /**
   * Pais del usuario, opcional y maximo 50 caracteres
   * @example Argentina
   */
  @Column({ type: 'varchar', length: 50, nullable: true })
  country: string;

  /**
   * Direccion del usuario, obligatoria y maximo 50 caracteres
   * @example Calle Falsa 1234
   */
  @Column({ type: 'text', nullable: false })
  address: string;

  /**
   * Ciudad del usuario, opcional y maximo 50 caracteres
   * @example Pocitos
   */
  @Column({ type: 'varchar', length: 50, nullable: true })
  city: string;

  /**
   * Rol del usuario, obligatorio
   */
  @Column({ type: 'varchar', nullable: false, default: Role.User })
  admin: string;

  /**
   * Relacion con tabla Orders
   */
  @OneToMany(() => OrdersEntity, (orders) => orders.user)
  orders: OrdersEntity[];
}
