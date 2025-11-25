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
exports.LoginDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LoginDto {
    email;
    password;
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, format: "email" }, password: { required: true, type: () => String, minLength: 8, maxLength: 15, pattern: "/(?=.*[a-z])/" } };
    }
}
exports.LoginDto = LoginDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'prueba@prueba.com',
        description: 'Correo único del usuario',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Contrasena1!',
    }),
    (0, class_validator_1.Length)(8, 15, { message: 'La contraseña debe tener 8 y 15 caracteres' }),
    (0, class_validator_1.Matches)(/(?=.*[a-z])/, {
        message: 'La contraseña debe contener al menos una letra minúscula',
    }),
    (0, class_validator_1.Matches)(/(?=.*[A-Z])/, {
        message: 'La contraseña debe contener al menos una letra mayúscula',
    }),
    (0, class_validator_1.Matches)(/(?=.*\d)/, {
        message: 'La contraseña debe contener al menos un número',
    }),
    (0, class_validator_1.Matches)(/(?=.*[!@#$%^&*])/, {
        message: 'Debe contener al menos un caracter especial (!@#$%^&*)',
    }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
//# sourceMappingURL=login.dto.js.map