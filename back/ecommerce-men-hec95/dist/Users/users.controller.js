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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const users_services_1 = require("./users.services");
const user_dto_1 = require("./user.dto");
const guard_1 = require("../guards/guard");
const id_dto_1 = require("../utils/DTOs/id.dto");
const roles_decorator_1 = require("../decorators/roles.decorator");
const role_enum_1 = require("../role.enum");
const role_guard_1 = require("../guards/role.guard");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async getUsers(page, limit) {
        const pageNumber = parseInt(page) || 1;
        const limitNumber = parseInt(limit) || 5;
        return await this.userService.getUsers(pageNumber, limitNumber);
    }
    async getUsersById(Params) {
        return await this.userService.getUsersById(Params);
    }
    async putUserByid(Params, updateUser) {
        return await this.userService.putUser(Params, updateUser);
    }
    async deleteUserById(Params) {
        return await this.userService.deleteUser(Params);
    }
};
exports.UserController = UserController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(guard_1.MiGuarda, role_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: [require("./user.dto").UserResponseDto] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(guard_1.MiGuarda),
    openapi.ApiResponse({ status: 200, type: require("./user.dto").UserResponseDto }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.idDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsersById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(guard_1.MiGuarda),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.idDto,
        user_dto_1.createUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "putUserByid", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(guard_1.MiGuarda),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [id_dto_1.idDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUserById", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_services_1.UserService])
], UserController);
//# sourceMappingURL=users.controller.js.map