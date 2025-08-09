"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCartModule = void 0;
const common_1 = require("@nestjs/common");
const add_to_cart_controller_1 = require("./add-to-cart.controller");
const add_to_cart_service_1 = require("./add-to-cart.service");
const add_to_cart_schema_1 = require("./add-to-cart.schema");
const products_schema_1 = require("../products/products.schema");
const mongoose_1 = require("@nestjs/mongoose");
let AddToCartModule = class AddToCartModule {
};
exports.AddToCartModule = AddToCartModule;
exports.AddToCartModule = AddToCartModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: add_to_cart_schema_1.AddToCart.name, schema: add_to_cart_schema_1.AddToCartSchema },
                { name: products_schema_1.Product.name, schema: products_schema_1.ProductSchema },
            ]),
        ],
        controllers: [add_to_cart_controller_1.AddToCartController],
        providers: [add_to_cart_service_1.AddToCartService],
        exports: [add_to_cart_service_1.AddToCartService],
    })
], AddToCartModule);
//# sourceMappingURL=add-to-cart.module.js.map