import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';
import { ReturnOrderDto } from './dto/returnOrder.dto';
import { ReturnOrderByIdDto } from './dto/returnOrderById.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrdersRepository) {}
  async addOrder(createOrder: CreateOrderDto): Promise<ReturnOrderDto> {
    const Order = await this.orderRepository.addOrder(createOrder);
    return Order;
  }

  async getOrder(orderId: string): Promise<ReturnOrderByIdDto> {
    const orderById = await this.orderRepository.getOrder(orderId);
    return orderById;
  }
}
