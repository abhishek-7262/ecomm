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
exports.AddToCartController = void 0;
const common_1 = require("@nestjs/common");
const add_to_cart_service_1 = require("./add-to-cart.service");
let AddToCartController = class AddToCartController {
    addToCartService;
    constructor(addToCartService) {
        this.addToCartService = addToCartService;
    }
    async add(addToCart) {
        return this.addToCartService.add(addToCart);
    }
};
exports.AddToCartController = AddToCartController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddToCartController.prototype, "add", null);
exports.AddToCartController = AddToCartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [add_to_cart_service_1.AddToCartService])
], AddToCartController);
//# sourceMappingURL=add-to-cart.controller.js.map