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
exports.OrdersEntity = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../../Users/user.entity");
const typeorm_1 = require("typeorm");
const orderDetails_entity_1 = require("./orderDetails.entity");
let OrdersEntity = class OrdersEntity {
    id;
    date;
    user;
    ordersDetail;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "UUID de Orden" }, date: { required: true, type: () => Date, description: "fecha de orden" }, user: { required: true, type: () => require("../../Users/user.entity").UserEntity, description: "Relacion con tabla User" }, ordersDetail: { required: true, type: () => require("./orderDetails.entity").OrderDetailsEntity, description: "Relacion con tabla OrderDetails" } };
    }
};
exports.OrdersEntity = OrdersEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrdersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], OrdersEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.orders, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.UserEntity)
], OrdersEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => orderDetails_entity_1.OrderDetailsEntity, (orderDetails) => orderDetails.order),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", orderDetails_entity_1.OrderDetailsEntity)
], OrdersEntity.prototype, "ordersDetail", void 0);
exports.OrdersEntity = OrdersEntity = __decorate([
    (0, typeorm_1.Entity)('orders')
], OrdersEntity);
//# sourceMappingURL=orders.entity.js.map