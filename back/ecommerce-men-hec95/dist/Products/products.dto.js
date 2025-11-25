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
exports.productDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class productDto {
    name;
    description;
    price;
    stock;
    imgUrl;
    category;
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, description: "Nombre de producto", example: "G45", minLength: 3, maxLength: 80 }, description: { required: true, type: () => String, description: "Descripcion de producto", example: "Auricular" }, price: { required: true, type: () => Number, description: "Precio de producto", example: 500 }, stock: { required: true, type: () => Number, description: "Stock disponible de producto", example: 25 }, imgUrl: { required: true, type: () => String, description: "Url de imagen del producto", example: "www.url.com", format: "uri" }, category: { required: true, type: () => String, description: "Categoria de producto", example: "Audio" } };
    }
}
exports.productDto = productDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no puede estar vacio' }),
    (0, class_validator_1.Length)(3, 80, { message: 'El nombre debe tener entre 3 y 80 Caracteres' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], productDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], productDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], productDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], productDto.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], productDto.prototype, "imgUrl", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], productDto.prototype, "category", void 0);
//# sourceMappingURL=products.dto.js.map