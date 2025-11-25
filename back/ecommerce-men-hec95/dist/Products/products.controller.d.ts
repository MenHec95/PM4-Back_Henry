import { ProductsService } from './products.services';
import { productDto } from './products.dto';
import { ProductsEntity } from './products.entity';
import { idDto } from 'src/utils/DTOs/id.dto';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    preCargaProducts(): Promise<string>;
    getUsers(page: string, limit: string): Promise<ProductsEntity[]>;
    getProductById(Params: idDto): Promise<ProductsEntity>;
    postProduct(product: productDto): Promise<string>;
    putProductById(Params: idDto, updateProduct: productDto): Promise<string>;
    deleteProductById(Params: idDto): Promise<string>;
}
