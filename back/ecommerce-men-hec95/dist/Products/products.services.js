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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
const product_seed_1 = require("../utils/product.seed");
let ProductsService = class ProductsService {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getProducts(pageNumber, limitNumber) {
        const limite = limitNumber;
        const inicio = (pageNumber - 1) * limite;
        if (limite < 0 || inicio < 0)
            throw new common_1.BadRequestException('Paginacion incorrecta');
        return this.productRepository.getProducts(inicio, limite);
    }
    async getProductById(id) {
        return this.productRepository.getProductsById(id);
    }
    async postProduct(product) {
        try {
            const ProductId = await this.productRepository.createProduct(product);
            return `Producto con ID: ${ProductId} creado`;
        }
        catch (error) {
            if (typeof error === 'object' && error !== null && 'code' in error) {
                const pgError = error;
                if (pgError.code === '23505') {
                    throw new common_1.ConflictException('El producto ya existe');
                }
            }
            throw new common_1.InternalServerErrorException('Error al crear producto');
        }
    }
    async putProduct(id, updateProduct) {
        const productUpdate = await this.productRepository.updateProduct(id, updateProduct);
        return `El usuario con Id: ${productUpdate.id} se actualizo`;
    }
    async deleteProduct(id) {
        const deleteProductId = await this.productRepository.DeleteProduct(id);
        return `El Usuario con Id: ${deleteProductId.id} ha sido eliminado'`;
    }
    async preCargaProductService() {
        const productList = product_seed_1.ProductsList;
        return await this.productRepository.addPreCargaProducts(productList);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository])
], ProductsService);
//# sourceMappingURL=products.services.js.map