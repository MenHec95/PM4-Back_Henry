"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const users_services_1 = require("./users.services");
const users_controller_1 = require("./users.controller");
const users_repository_1 = require("./users.repository");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])],
        providers: [users_services_1.UserService, users_repository_1.UsersRepository],
        controllers: [users_controller_1.UserController],
        exports: [users_repository_1.UsersRepository, users_services_1.UserService],
    })
], UserModule);
//# sourceMappingURL=users.module.js.map