import { productDto } from './products.dto';
import { ProductsEntity } from './products.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from 'src/categories/entities/categories.entity';
import { idDto } from 'src/utils/DTOs/id.dto';
export declare class ProductsRepository {
    private readonly productsRepo;
    private readonly categoriesRepo;
    constructor(productsRepo: Repository<ProductsEntity>, categoriesRepo: Repository<CategoryEntity>);
    getProducts(inicio: number, limite: number): Promise<ProductsEntity[]>;
    getProductsById(id: idDto): Promise<ProductsEntity>;
    createProduct(product: productDto): Promise<string>;
    updateProduct(id: idDto, updateProduct: productDto): Promise<idDto>;
    DeleteProduct(id: idDto): Promise<idDto>;
    addPreCargaProducts(productList: Omit<productDto, 'imgUrl'>[]): Promise<string>;
}
