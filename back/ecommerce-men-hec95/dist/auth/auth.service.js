"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../Users/users.repository");
const users_services_1 = require("../Users/users.services");
const bcrypt = __importStar(require("bcrypt"));
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    userRepository;
    UserService;
    jwtService;
    constructor(userRepository, UserService, jwtService) {
        this.userRepository = userRepository;
        this.UserService = UserService;
        this.jwtService = jwtService;
    }
    async login(login) {
        let User;
        if (login.email && login.password)
            User = await this.userRepository.loginvalidate(login);
        else {
            throw new common_1.BadRequestException('El Email y password son obligatorios');
        }
        const userPayload = {
            sub: User.id,
            id: User.id,
            email: User.email,
            roles: User.admin,
        };
        const Token = this.jwtService.sign(userPayload);
        return { success: 'Login exitoso', Token };
    }
    async signUp(user) {
        if (!(user.password &&
            user.passwordRepeat &&
            user.password === user.passwordRepeat))
            throw new common_1.BadRequestException('Las contraseñas no coinciden');
        const { passwordRepeat, ...userData } = user;
        try {
            const encriptacion = await bcrypt.hash(user.password, 10);
            userData.password = encriptacion;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new common_1.BadRequestException('Error en contraseña');
            }
        }
        try {
            const newUser = await this.UserService.postUser(userData);
            return newUser;
        }
        catch (error) {
            const err = error;
            throw new common_1.BadRequestException(err.detail || 'Error desconocido');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        users_services_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map