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
exports.CreateOrderDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const productOrder_dto_1 = require("./productOrder.dto");
class CreateOrderDto {
    userID;
    products;
    static _OPENAPI_METADATA_FACTORY() {
        return { userID: { required: true, type: () => String, description: "UUID de usuario", format: "uuid" }, products: { required: true, type: () => [require("./productOrder.dto").productOrderDto], description: "Lista de productos a agregar a la Orden de compra", minItems: 1 } };
    }
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Se requiere ID' }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "userID", void 0);
__decorate([
    (0, class_validator_1.IsArray)({ message: 'Debe ser un array de Productos' }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Debe tener almenos un elemento' }),
    (0, class_transformer_1.Type)(() => productOrder_dto_1.productOrderDto),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "products", void 0);
//# sourceMappingURL=create-order.dto.js.map