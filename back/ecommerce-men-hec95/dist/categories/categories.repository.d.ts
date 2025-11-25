import { CategoryEntity } from './entities/categories.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesRepository {
    private readonly categoriesRepo;
    constructor(categoriesRepo: Repository<CategoryEntity>);
    addCategories(categoriesList: string[]): Promise<CreateCategoryDto[]>;
    finCategories(): Promise<CreateCategoryDto[]>;
}
