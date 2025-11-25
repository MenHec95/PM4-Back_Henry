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
exports.ProductsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const products_services_1 = require("./products.services");
const products_dto_1 = require("./products.dto");
const guard_1 = require("../guards/guard");
const id_dto_1 = require("../utils/DTOs/id.dto");
const roles_decorator_1 = require("../decorators/roles.decorator");
const role_enum_1 = require("../role.enum");
const role_guard_1 = require("../guards/role.guard");
const swagger_1 = require("@nestjs/swagger");
let ProductsController = class ProductsController {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    async preCargaProducts() {
        return await this.productService.preCargaProductService();
    }
    async getUsers(page, limit) {
        const pageNumber = parseInt(page) || 1;
        const limitNumber = parseInt(limit) || 5;
        return this.productService.getProducts(pageNumber, limitNumber);
    }
    async getProductById(Params) {
        return this.productService.getProductById(Params);
    }
    async postProduct(product) {
        return this.productService.postProduct(product);
    }
    async putProductById(Params, updateProduct) {
        return this.productService.putProduct(Params, updateProduct);
    }
    async deleteProductById(Params) {
        return await this.productService.deleteProduct(Params);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)('seeder'),
    openapi.ApiResponse({ status: 201, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "preCargaProducts", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./products.entity").ProductsEntity] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getUsers", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./products.entity").ProductsEntity }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.idDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProductById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guard_1.MiGuarda),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [products_dto_1.productDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "postProduct", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(guard_1.MiGuarda, role_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.idDto,
        products_dto_1.productDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "putProductById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(guard_1.MiGuarda),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.idDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProductById", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_services_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map