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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
let UserService = class UserService {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUsers(pageNumber, limitNumber) {
        const limite = limitNumber;
        const inicio = (pageNumber - 1) * limite;
        if (limite < 0 || inicio < 0)
            throw new common_1.BadRequestException('Paginacion incorrecta');
        const Users = await this.usersRepository.getUsers(inicio, limite);
        const allUsers = Users.map((usuario) => {
            const { password, ...rest } = usuario;
            return rest;
        });
        return allUsers;
    }
    async getUsersById(id) {
        const User = await this.usersRepository.getUsersById(id.id);
        if (!User) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
        const { password, admin, ...rest } = User;
        return rest;
    }
    async postUser(user) {
        return await this.usersRepository.createUser(user);
    }
    async deleteUser(id) {
        const userDelete = await this.usersRepository.DeleteUser(id.id);
        return `El Usuario con ID: ${userDelete} se elimino`;
    }
    async putUser(id, updateUser) {
        try {
            const userUpdate = await this.usersRepository.updateUser(id.id, updateUser);
            return `El usuario con Id: ${userUpdate} se actualizo`;
        }
        catch (error) {
            const err = error;
            throw new common_1.BadRequestException(err.detail || 'Error Desconocido');
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UserService);
//# sourceMappingURL=users.services.js.map