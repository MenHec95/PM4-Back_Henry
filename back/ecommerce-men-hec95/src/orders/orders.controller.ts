import { Controller, Post, Body, Param, UseGuards, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

import { ReturnOrderDto } from './dto/returnOrder.dto';
import { ReturnOrderByIdDto } from './dto/returnOrderById.dto';
import { idDto } from 'src/utils/DTOs/id.dto';
import { MiGuarda } from 'src/guards/guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiBearerAuth()
  @Post()
  @UseGuards(MiGuarda)
  async addOrder(@Body() createOrder: CreateOrderDto): Promise<ReturnOrderDto> {
    return await this.ordersService.addOrder(createOrder);
  }

  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(MiGuarda)
  async getOrder(@Param() Params: idDto): Promise<ReturnOrderByIdDto> {
    return this.ordersService.getOrder(Params.id);
  }
}
