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
exports.SignupDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class SignupDto {
    email;
    name;
    password;
    passwordRepeat;
    address;
    phone;
    country;
    city;
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, format: "email" }, name: { required: true, type: () => String, minLength: 3, maxLength: 80 }, password: { required: true, type: () => String, minLength: 8, maxLength: 15, pattern: "/(?=.*[a-z])/" }, passwordRepeat: { required: true, type: () => String, minLength: 8, maxLength: 15, pattern: "/(?=.*[a-z])/" }, address: { required: true, type: () => String, minLength: 3, maxLength: 80 }, phone: { required: true, type: () => Number }, country: { required: false, type: () => String, minLength: 5, maxLength: 20 }, city: { required: false, type: () => String, minLength: 5, maxLength: 20 } };
    }
}
exports.SignupDto = SignupDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignupDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no puede estar vacio' }),
    (0, class_validator_1.Length)(3, 80, { message: 'El nombre debe tener entre 3 y 80 Caracteres' }),
    __metadata("design:type", String)
], SignupDto.prototype, "name", void 0);
__decorate([
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
], SignupDto.prototype, "password", void 0);
__decorate([
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
], SignupDto.prototype, "passwordRepeat", void 0);
__decorate([
    (0, class_validator_1.Length)(3, 80, {
        message: ' La direccion debe tener entre 3 y 80 caracteres',
    }),
    __metadata("design:type", String)
], SignupDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El numero de telefono no puede estar vacio' }),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], SignupDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El pais debe ser una cadena de texto' }),
    (0, class_validator_1.Length)(5, 20, { message: 'El pais debe tener entre 5 y 20 caracteres' }),
    __metadata("design:type", String)
], SignupDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La ciudad debe ser una cadena de texto' }),
    (0, class_validator_1.Length)(5, 20, { message: 'La ciudad debe tener entre 5 y 20 caracteres' }),
    __metadata("design:type", String)
], SignupDto.prototype, "city", void 0);
//# sourceMappingURL=signup.dto.js.map