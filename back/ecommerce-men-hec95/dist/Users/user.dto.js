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
exports.UserResponseDto = exports.createUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class createUserDto {
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
exports.createUserDto = createUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'prueba@prueba.com',
        description: 'Correo único del usuario',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], createUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Nombre',
        description: 'Nombre del usuario',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre no puede estar vacio' }),
    (0, class_validator_1.Length)(3, 80, { message: 'El nombre debe tener entre 3 y 80 Caracteres' }),
    __metadata("design:type", String)
], createUserDto.prototype, "name", void 0);
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
], createUserDto.prototype, "password", void 0);
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
], createUserDto.prototype, "passwordRepeat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Calle Falsa 1234',
        description: 'Direccion de Usuario',
    }),
    (0, class_validator_1.Length)(3, 80, {
        message: ' La direccion debe tener entre 3 y 80 caracteres',
    }),
    __metadata("design:type", String)
], createUserDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234567890',
        description: 'Numero de telefono de usuario',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El numero de telefono no puede estar vacio' }),
    (0, class_transformer_1.Transform)(({ value }) => Number(value)),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], createUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Argentina',
        description: 'Pais del Usuario',
    }),
    (0, class_validator_1.IsString)({ message: 'El pais debe ser una cadena de texto' }),
    (0, class_validator_1.Length)(5, 20, { message: 'El pais debe tener entre 5 y 20 caracteres' }),
    __metadata("design:type", String)
], createUserDto.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Mendoza',
        description: 'Ciudad del Usuario',
    }),
    (0, class_validator_1.IsString)({ message: 'La ciudad debe ser una cadena de texto' }),
    (0, class_validator_1.Length)(5, 20, { message: 'La ciudad debe tener entre 5 y 20 caracteres' }),
    __metadata("design:type", String)
], createUserDto.prototype, "city", void 0);
class UserResponseDto {
    id;
    name;
    email;
    phone;
    country;
    address;
    city;
    orders;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "Id de Respuesta" }, name: { required: true, type: () => String, description: "Nombre de usuario de respuesta" }, email: { required: true, type: () => String, description: "Email de usuario de respuesta" }, phone: { required: true, type: () => Number, description: "Numero de Telefono de usuario de respuesta" }, country: { required: false, type: () => String, description: "Pais de Usuario de respuesta" }, address: { required: true, type: () => String, description: "Direccion de usuario de respuesta" }, city: { required: false, type: () => String, description: "ciudad de Usuario de respuesta" }, orders: { required: true, type: () => [require("../orders/entities/orders.entity").OrdersEntity], description: "Relacion con tabla de Orders" } };
    }
}
exports.UserResponseDto = UserResponseDto;
//# sourceMappingURL=user.dto.js.map