"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnOrderDto = void 0;
const openapi = require("@nestjs/swagger");
class ReturnOrderDto {
    order;
    price;
    orderdetailsId;
    static _OPENAPI_METADATA_FACTORY() {
        return { order: { required: true, type: () => String, description: "order de respuesta" }, price: { required: true, type: () => Number, description: "Precio de order" }, orderdetailsId: { required: true, type: () => String, description: "ID de Details" } };
    }
}
exports.ReturnOrderDto = ReturnOrderDto;
//# sourceMappingURL=returnOrder.dto.js.map