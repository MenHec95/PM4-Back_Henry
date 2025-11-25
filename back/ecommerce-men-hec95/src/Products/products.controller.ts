import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.services';

import { productDto } from './products.dto';
import { MiGuarda } from 'src/guards/guard';
import { ProductsEntity } from './products.entity';
import { idDto } from 'src/utils/DTOs/id.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/role.enum';
import { RolesGuard } from 'src/guards/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post('seeder')
  async preCargaProducts(): Promise<string> {
    return await this.productService.preCargaProductService();
  }

  @HttpCode(200)
  @Get()
  async getUsers(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ): Promise<ProductsEntity[]> {
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 5;
    return this.productService.getProducts(pageNumber, limitNumber);
  }

  @HttpCode(200)
  @Get(':id')
  async getProductById(@Param() Params: idDto): Promise<ProductsEntity> {
    return this.productService.getProductById(Params);
  }

  @ApiBearerAuth()
  @HttpCode(201)
  @Post()
  @UseGuards(MiGuarda)
  async postProduct(@Body() product: productDto): Promise<string> {
    return this.productService.postProduct(product);
  }

  @ApiBearerAuth()
  @HttpCode(200)
  @Put(':id')
  @Roles(Role.Admin)
  @UseGuards(MiGuarda, RolesGuard)
  async putProductById(
    @Param() Params: idDto,
    @Body() updateProduct: productDto,
  ): Promise<string> {
    return this.productService.putProduct(Params, updateProduct);
  }

  @ApiBearerAuth()
  @HttpCode(200)
  @Delete(':id')
  @UseGuards(MiGuarda)
  async deleteProductById(@Param() Params: idDto): Promise<string> {
    return await this.productService.deleteProduct(Params);
  }
}
