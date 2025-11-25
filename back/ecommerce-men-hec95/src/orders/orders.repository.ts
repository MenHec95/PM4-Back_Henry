import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDetailsEntity } from './entities/orderDetails.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { ReturnOrderDto } from './dto/returnOrder.dto';
import { OrdersEntity } from './entities/orders.entity';

import { UserEntity } from 'src/Users/user.entity';
import { ProductsEntity } from 'src/Products/products.entity';
import { ReturnOrderByIdDto } from './dto/returnOrderById.dto';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly orderRepo: Repository<OrdersEntity>,
    @InjectRepository(OrderDetailsEntity)
    private readonly orderDetailsRepo: Repository<OrderDetailsEntity>,
    @InjectRepository(UserEntity)
    private readonly UsersRepo: Repository<UserEntity>,
    @InjectRepository(ProductsEntity)
    private readonly productRepo: Repository<ProductsEntity>,
  ) {}

  async addOrder(createOrder: CreateOrderDto): Promise<ReturnOrderDto> {
    const userExist = await this.UsersRepo.findOne({
      where: { id: createOrder.userID },
      relations: ['orders'],
    });

    if (!userExist) throw new NotFoundException('Usuario no encontrado');

    const orderNew = this.orderRepo.create({
      user: userExist,
      date: new Date(),
    });

    await this.orderRepo.save(orderNew);

    userExist.orders.push(orderNew);

    await this.UsersRepo.save(userExist);
    const productList: ProductsEntity[] = [];

    let priceTotal = 0;

    for (const product of createOrder.products) {
      const productFind = await this.productRepo.findOne({
        where: { id: product.id },
      });
      if (!productFind)
        throw new NotFoundException(
          `Producto con Id: ${product.id} no encontrado`,
        );
      if (productList.some((p) => p.id === productFind.id))
        throw new NotFoundException('Producto Repetido');
      if (productFind.stock > 0) {
        productFind.stock -= 1;
        priceTotal += Number(productFind.price);
        productList.push(productFind);
        await this.productRepo.save(productFind);
      }
    }
    const orderDetail = this.orderDetailsRepo.create({
      order: orderNew,
      product: productList,
      price: priceTotal,
    });

    await this.orderDetailsRepo.save(orderDetail);

    return {
      order: orderNew.id,
      price: priceTotal,
      orderdetailsId: orderDetail.id,
    };
  }

  async getOrder(orderId: string): Promise<ReturnOrderByIdDto> {
    const orderFind = await this.orderRepo.findOne({
      where: { id: orderId },
      relations: ['ordersDetail', 'ordersDetail.product'],
    });
    if (!orderFind) {
      throw new NotFoundException('Orden no encontrada');
    }
    return {
      order: orderFind.id,
      orderDetailComplete: orderFind,
      orderDetail:
        orderFind.ordersDetail?.product?.map((product) => product.name) ?? [],
    };
  }
}
