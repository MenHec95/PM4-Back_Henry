import { CategoriesRepository } from './categories.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesService {
    private CategoriesRepository;
    constructor(CategoriesRepository: CategoriesRepository);
    create(): Promise<string>;
    findAll(): Promise<CreateCategoryDto[]>;
}
