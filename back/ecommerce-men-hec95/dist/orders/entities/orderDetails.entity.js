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
exports.OrderDetailsEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const orders_entity_1 = require("./orders.entity");
const products_entity_1 = require("../../Products/products.entity");
let OrderDetailsEntity = class OrderDetailsEntity {
    id;
    price;
    order;
    product;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "UUID de cada detalle de Orden" }, price: { required: true, type: () => Number, description: "Precio Total de orden" }, order: { required: true, type: () => require("./orders.entity").OrdersEntity, description: "Relacion con tabla Order" }, product: { required: true, type: () => [require("../../Products/products.entity").ProductsEntity], description: "relacion con tabla Producto" } };
    }
};
exports.OrderDetailsEntity = OrderDetailsEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrderDetailsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], OrderDetailsEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => orders_entity_1.OrdersEntity, (orders) => orders.ordersDetail),
    __metadata("design:type", orders_entity_1.OrdersEntity)
], OrderDetailsEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => products_entity_1.ProductsEntity, (products) => products.orderDetail),
    __metadata("design:type", Array)
], OrderDetailsEntity.prototype, "product", void 0);
exports.OrderDetailsEntity = OrderDetailsEntity = __decorate([
    (0, typeorm_1.Entity)('orderDetails')
], OrderDetailsEntity);
//# sourceMappingURL=orderDetails.entity.js.map