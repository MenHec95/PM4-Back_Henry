import { Injectable } from '@nestjs/common';
import { ProductsList } from 'src/utils/product.seed';
import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly CategoriesRepository: CategoriesRepository) {}

  async create(): Promise<string> {
    const categoriesList = ProductsList.map((Products) => Products.category);
    await this.CategoriesRepository.addCategories(categoriesList);
    return 'This action adds a new category';
  }

  async findAll(): Promise<CreateCategoryDto[]> {
    const findCategories = await this.CategoriesRepository.finCategories();
    return findCategories;
  }
}
