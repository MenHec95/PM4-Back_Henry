"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateCategoryDto {
    id;
    name;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "Id Respuesta de categoria" }, name: { required: true, type: () => String, description: "nombre de Categoria de respuesta" } };
    }
}
exports.CreateCategoryDto = CreateCategoryDto;
//# sourceMappingURL=create-category.dto.js.map