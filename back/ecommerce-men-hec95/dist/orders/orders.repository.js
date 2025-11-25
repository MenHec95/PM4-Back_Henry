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
exports.OrdersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const orderDetails_entity_1 = require("./entities/orderDetails.entity");
const orders_entity_1 = require("./entities/orders.entity");
const user_entity_1 = require("../Users/user.entity");
const products_entity_1 = require("../Products/products.entity");
let OrdersRepository = class OrdersRepository {
    orderRepo;
    orderDetailsRepo;
    UsersRepo;
    productRepo;
    constructor(orderRepo, orderDetailsRepo, UsersRepo, productRepo) {
        this.orderRepo = orderRepo;
        this.orderDetailsRepo = orderDetailsRepo;
        this.UsersRepo = UsersRepo;
        this.productRepo = productRepo;
    }
    async addOrder(createOrder) {
        const userExist = await this.UsersRepo.findOne({
            where: { id: createOrder.userID },
            relations: ['orders'],
        });
        if (!userExist)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const orderNew = this.orderRepo.create({
            user: userExist,
            date: new Date(),
        });
        await this.orderRepo.save(orderNew);
        userExist.orders.push(orderNew);
        await this.UsersRepo.save(userExist);
        const productList = [];
        let priceTotal = 0;
        for (const product of createOrder.products) {
            const productFind = await this.productRepo.findOne({
                where: { id: product.id },
            });
            if (!productFind)
                throw new common_1.NotFoundException(`Producto con Id: ${product.id} no encontrado`);
            if (productList.some((p) => p.id === productFind.id))
                throw new common_1.NotFoundException('Producto Repetido');
            if (productFind.stock > 0) {
                productFind.stock -= 1;
                priceTotal += Number(productFind.price);
                productList.push(productFind);
                await this.productRepo.save(productFind);
            }
        }
        const orderDetail = this.orderDetailsRepo.create({
            order: orderNew,
            product: productList,
            price: priceTotal,
        });
        await this.orderDetailsRepo.save(orderDetail);
        return {
            order: orderNew.id,
            price: priceTotal,
            orderdetailsId: orderDetail.id,
        };
    }
    async getOrder(orderId) {
        const orderFind = await this.orderRepo.findOne({
            where: { id: orderId },
            relations: ['ordersDetail', 'ordersDetail.product'],
        });
        if (!orderFind) {
            throw new common_1.NotFoundException('Orden no encontrada');
        }
        return {
            order: orderFind.id,
            orderDetailComplete: orderFind,
            orderDetail: orderFind.ordersDetail?.product?.map((product) => product.name) ?? [],
        };
    }
};
exports.OrdersRepository = OrdersRepository;
exports.OrdersRepository = OrdersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orders_entity_1.OrdersEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(orderDetails_entity_1.OrderDetailsEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(products_entity_1.ProductsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersRepository);
//# sourceMappingURL=orders.repository.js.map