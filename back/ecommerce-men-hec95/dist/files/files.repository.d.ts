import { ProductsEntity } from 'src/Products/products.entity';
import { idDto } from 'src/utils/DTOs/id.dto';
import { Repository } from 'typeorm';
export declare class FilesRepository {
    private readonly productsRepo;
    constructor(productsRepo: Repository<ProductsEntity>);
    uploadImage(idProduct: idDto, imageUrl: string): Promise<string>;
}
