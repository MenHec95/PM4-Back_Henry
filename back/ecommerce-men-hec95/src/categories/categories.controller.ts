import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('seeder')
  async create(): Promise<string> {
    return await this.categoriesService.create();
  }

  @Get()
  async findAll(): Promise<CreateCategoryDto[]> {
    return await this.categoriesService.findAll();
  }
}
