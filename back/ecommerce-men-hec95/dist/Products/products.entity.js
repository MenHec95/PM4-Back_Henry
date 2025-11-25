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
exports.ProductsEntity = void 0;
const openapi = require("@nestjs/swagger");
const categories_entity_1 = require("../categories/entities/categories.entity");
const orderDetails_entity_1 = require("../orders/entities/orderDetails.entity");
const typeorm_1 = require("typeorm");
let ProductsEntity = class ProductsEntity {
    id;
    name;
    description;
    price;
    stock;
    imgUrl;
    category;
    orderDetail;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "UUID de producto" }, name: { required: true, type: () => String, description: "Nombre de producto" }, description: { required: true, type: () => String, description: "Descripcion de producto" }, price: { required: true, type: () => Number, description: "Precio de producto" }, stock: { required: true, type: () => Number, description: "stock disponible de producto" }, imgUrl: { required: true, type: () => String, description: "Url de imagen del procducto" }, category: { required: true, type: () => require("../categories/entities/categories.entity").CategoryEntity, description: "Relacion con tabla Category" }, orderDetail: { required: true, type: () => [require("../orders/entities/orderDetails.entity").OrderDetailsEntity], description: "Relacion con tabla OrderDetail" } };
    }
};
exports.ProductsEntity = ProductsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProductsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: false, unique: true }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        default: 'https://cdn-icons-png.flaticon.com/512/32/32345.png',
    }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "imgUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categories_entity_1.CategoryEntity, (category) => category.products, {
        cascade: true,
    }),
    __metadata("design:type", categories_entity_1.CategoryEntity)
], ProductsEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => orderDetails_entity_1.OrderDetailsEntity, (orderDetail) => orderDetail.product, {
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], ProductsEntity.prototype, "orderDetail", void 0);
exports.ProductsEntity = ProductsEntity = __decorate([
    (0, typeorm_1.Entity)('products')
], ProductsEntity);
//# sourceMappingURL=products.entity.js.map