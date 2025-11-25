import { Injectable, NotFoundException } from '@nestjs/common';
import { productDto } from './products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './products.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from 'src/categories/entities/categories.entity';
import { idDto } from 'src/utils/DTOs/id.dto';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepo: Repository<ProductsEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoriesRepo: Repository<CategoryEntity>,
  ) {}

  async getProducts(inicio: number, limite: number): Promise<ProductsEntity[]> {
    const lista = await this.productsRepo.find({
      skip: inicio,
      take: limite,
      relations: ['category'],
    });

    return lista;
  }

  async getProductsById(id: idDto): Promise<ProductsEntity> {
    // const productFind = this.products.find((product) => product.id === id);
    const productFind = await this.productsRepo.findOne({
      where: { id: id.id },
      relations: ['category'],
    });

    if (!productFind) {
      throw new NotFoundException('Producto no encontrado');
    }

    return productFind;
  }

  async createProduct(product: productDto): Promise<string> {
    let categoryPro = await this.categoriesRepo.findOne({
      where: { name: product.category },
    });

    if (!categoryPro) {
      categoryPro = this.categoriesRepo.create({ name: product.category });
      categoryPro = await this.categoriesRepo.save(categoryPro);
    }

    const productAdd: ProductsEntity = this.productsRepo.create({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: { id: categoryPro?.id },
    });

    await this.productsRepo.save(productAdd);
    return productAdd.id;
  }

  async updateProduct(id: idDto, updateProduct: productDto): Promise<idDto> {
    const updateProductFind = await this.productsRepo.findOne({
      where: { id: id.id },
      relations: ['category'],
    });

    if (!updateProductFind) {
      throw new NotFoundException(`Producto con id ${id.id} no encontrado`);
    }

    const { category, ...rest } = updateProduct;

    let categoryEntity = await this.categoriesRepo.findOne({
      where: { name: category },
    });

    if (!categoryEntity) {
      categoryEntity = this.categoriesRepo.create({ name: category });
      await this.categoriesRepo.save(categoryEntity);
    }

    updateProductFind.category = categoryEntity;

    Object.assign(updateProductFind, rest);

    await this.productsRepo.save(updateProductFind);
    return id;
  }

  async DeleteProduct(id: idDto): Promise<idDto> {
    const Product = await this.productsRepo.findOne({ where: { id: id.id } });

    if (!Product) {
      throw new NotFoundException(`Producto con id ${id.id} no encontrado`);
    }

    await this.productsRepo.remove(Product);
    return id;
  }

  async addPreCargaProducts(
    productList: Omit<productDto, 'imgUrl'>[],
  ): Promise<string> {
    const preProductList: ProductsEntity[] = [];

    for (let i = 0; i < productList.length; i++) {
      const categoryPro = await this.categoriesRepo.findOne({
        where: { name: productList[i].category },
      });

      const product: ProductsEntity = this.productsRepo.create({
        name: productList[i].name,
        description: productList[i].description,
        price: productList[i].price,
        stock: productList[i].stock,
        category: { id: categoryPro?.id },
      });
      preProductList.push(product);
    }
    await this.productsRepo.save(preProductList);
    return 'precarga finalizada';
  }
}
