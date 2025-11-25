"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnOrderByIdDto = void 0;
const openapi = require("@nestjs/swagger");
class ReturnOrderByIdDto {
    order;
    orderDetailComplete;
    orderDetail;
    static _OPENAPI_METADATA_FACTORY() {
        return { order: { required: true, type: () => String, description: "Orden de respuesta" }, orderDetailComplete: { required: true, type: () => require("../entities/orders.entity").OrdersEntity, description: "Detalles de la orden" }, orderDetail: { required: true, type: () => [String] } };
    }
}
exports.ReturnOrderByIdDto = ReturnOrderByIdDto;
//# sourceMappingURL=returnOrderById.dto.js.map