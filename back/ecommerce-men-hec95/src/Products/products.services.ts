import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { productDto } from './products.dto';
import { ProductsList } from 'src/utils/product.seed';
import { ProductsEntity } from './products.entity';
import { idDto } from 'src/utils/DTOs/id.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductsRepository) {}

  async getProducts(
    pageNumber: number,
    limitNumber: number,
  ): Promise<ProductsEntity[]> {
    const limite = limitNumber;
    const inicio = (pageNumber - 1) * limite;
    if (limite < 0 || inicio < 0)
      throw new BadRequestException('Paginacion incorrecta');
    return this.productRepository.getProducts(inicio, limite);
  }
  async getProductById(id: idDto): Promise<ProductsEntity> {
    return this.productRepository.getProductsById(id);
  }
  async postProduct(product: productDto): Promise<string> {
    try {
      const ProductId = await this.productRepository.createProduct(product);
      return `Producto con ID: ${ProductId} creado`;
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'code' in error) {
        const pgError = error as { code: string; detail?: string };

        if (pgError.code === '23505') {
          throw new ConflictException('El producto ya existe');
        }
      }

      throw new InternalServerErrorException('Error al crear producto');
    }
  }
  async putProduct(id: idDto, updateProduct: productDto): Promise<string> {
    const productUpdate = await this.productRepository.updateProduct(
      id,
      updateProduct,
    );

    return `El usuario con Id: ${productUpdate.id} se actualizo`;
  }

  async deleteProduct(id: idDto): Promise<string> {
    const deleteProductId = await this.productRepository.DeleteProduct(id);
    return `El Usuario con Id: ${deleteProductId.id} ha sido eliminado'`;
  }

  async preCargaProductService(): Promise<string> {
    const productList: Omit<productDto, 'id' | 'imgUrl'>[] = ProductsList;

    return await this.productRepository.addPreCargaProducts(productList);
  }
}
