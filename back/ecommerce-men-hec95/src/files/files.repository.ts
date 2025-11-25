import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from 'src/Products/products.entity';
import { idDto } from 'src/utils/DTOs/id.dto';
import { Repository } from 'typeorm';

@Injectable()
export class FilesRepository {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepo: Repository<ProductsEntity>,
  ) {}

  async uploadImage(idProduct: idDto, imageUrl: string): Promise<string> {
    const findProduct = await this.productsRepo.findOne({
      where: { id: idProduct.id },
    });

    if (!findProduct) throw new BadRequestException('Producto no encontrado');

    findProduct.imgUrl = imageUrl;
    await this.productsRepo.save(findProduct);
    return 'Actualizacion correcta de imagen de producto';
  }
}
