"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("./products.entity");
const typeorm_2 = require("typeorm");
const categories_entity_1 = require("../categories/entities/categories.entity");
let ProductsRepository = class ProductsRepository {
    productsRepo;
    categoriesRepo;
    constructor(productsRepo, categoriesRepo) {
        this.productsRepo = productsRepo;
        this.categoriesRepo = categoriesRepo;
    }
    async getProducts(inicio, limite) {
        const lista = await this.productsRepo.find({
            skip: inicio,
            take: limite,
            relations: ['category'],
        });
        return lista;
    }
    async getProductsById(id) {
        const productFind = await this.productsRepo.findOne({
            where: { id: id.id },
            relations: ['category'],
        });
        if (!productFind) {
            throw new common_1.NotFoundException('Producto no encontrado');
        }
        return productFind;
    }
    async createProduct(product) {
        let categoryPro = await this.categoriesRepo.findOne({
            where: { name: product.category },
        });
        if (!categoryPro) {
            categoryPro = this.categoriesRepo.create({ name: product.category });
            categoryPro = await this.categoriesRepo.save(categoryPro);
        }
        const productAdd = this.productsRepo.create({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            category: { id: categoryPro?.id },
        });
        await this.productsRepo.save(productAdd);
        return productAdd.id;
    }
    async updateProduct(id, updateProduct) {
        const updateProductFind = await this.productsRepo.findOne({
            where: { id: id.id },
            relations: ['category'],
        });
        if (!updateProductFind) {
            throw new common_1.NotFoundException(`Producto con id ${id.id} no encontrado`);
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
    async DeleteProduct(id) {
        const Product = await this.productsRepo.findOne({ where: { id: id.id } });
        if (!Product) {
            throw new common_1.NotFoundException(`Producto con id ${id.id} no encontrado`);
        }
        await this.productsRepo.remove(Product);
        return id;
    }
    async addPreCargaProducts(productList) {
        const preProductList = [];
        for (let i = 0; i < productList.length; i++) {
            const categoryPro = await this.categoriesRepo.findOne({
                where: { name: productList[i].category },
            });
            const product = this.productsRepo.create({
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
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.ProductsEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.CategoryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map