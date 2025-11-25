import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './entities/categories.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoriesRepo: Repository<CategoryEntity>,
  ) {}

  async addCategories(categoriesList: string[]): Promise<CreateCategoryDto[]> {
    const categoriesListSave: CreateCategoryDto[] = [];
    for (let i = 0; i < categoriesList.length; i++) {
      if (!categoriesListSave.some((c) => c.name === categoriesList[i])) {
        const category = this.categoriesRepo.create({
          name: categoriesList[i],
        });
        categoriesListSave.push(category);
      }
    }
    return await this.categoriesRepo.save(categoriesListSave);
  }

  async finCategories(): Promise<CreateCategoryDto[]> {
    const categories = await this.categoriesRepo.find();
    return categories;
  }
}
