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
exports.UserEntity = void 0;
const openapi = require("@nestjs/swagger");
const orders_entity_1 = require("../orders/entities/orders.entity");
const role_enum_1 = require("../role.enum");
const typeorm_1 = require("typeorm");
let UserEntity = class UserEntity {
    id;
    name;
    email;
    password;
    phone;
    country;
    address;
    city;
    admin;
    orders;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "UUID unico de cada usuario" }, name: { required: true, type: () => String, description: "Nombre del usuario obligatorio de maximo 50 caracteres", example: "Pepito" }, email: { required: true, type: () => String, description: "Email del Usuario, obligatorio, unico y maximo de 50 caracteres", example: "pepito@email.com" }, password: { required: true, type: () => String, description: "Contrase\u00F1a del Usuario, obligatoria minimo 8 caracteres, una mayuscula, minuscula, numero y caracter especial", example: "Pep1t0!@" }, phone: { required: true, type: () => Number, description: "Numero de telefono de Usuario, obligatorio", example: 1122233444 }, country: { required: true, type: () => String, description: "Pais del usuario, opcional y maximo 50 caracteres", example: "Argentina" }, address: { required: true, type: () => String, description: "Direccion del usuario, obligatoria y maximo 50 caracteres" }, city: { required: true, type: () => String, description: "Ciudad del usuario, opcional y maximo 50 caracteres", example: "Pocitos" }, admin: { required: true, type: () => String, description: "Rol del usuario, obligatorio" }, orders: { required: true, type: () => [require("../orders/entities/orders.entity").OrdersEntity], description: "Relacion con tabla Orders" } };
    }
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 50 }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, unique: true, nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, default: role_enum_1.Role.User }),
    __metadata("design:type", String)
], UserEntity.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orders_entity_1.OrdersEntity, (orders) => orders.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "orders", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], UserEntity);
//# sourceMappingURL=user.entity.js.map