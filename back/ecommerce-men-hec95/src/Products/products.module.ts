import { Module } from '@nestjs/common';
import { ProductsService } from './products.services';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { ProductsEntity } from './products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/categories/entities/categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity, CategoryEntity])],
  providers: [ProductsService, ProductsRepository],
  controllers: [ProductsController],
})
export class ProductsModule {}
