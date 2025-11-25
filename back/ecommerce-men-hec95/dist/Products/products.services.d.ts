import { ProductsRepository } from './products.repository';
import { productDto } from './products.dto';
import { ProductsEntity } from './products.entity';
import { idDto } from 'src/utils/DTOs/id.dto';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: ProductsRepository);
    getProducts(pageNumber: number, limitNumber: number): Promise<ProductsEntity[]>;
    getProductById(id: idDto): Promise<ProductsEntity>;
    postProduct(product: productDto): Promise<string>;
    putProduct(id: idDto, updateProduct: productDto): Promise<string>;
    deleteProduct(id: idDto): Promise<string>;
    preCargaProductService(): Promise<string>;
}
