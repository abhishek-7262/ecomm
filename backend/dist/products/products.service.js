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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_schema_1 = require("./products.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const slugify_1 = require("./utils/slugify");
let ProductsService = class ProductsService {
    productModel;
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(productDto) {
        if (productDto.variants && productDto.variants.length) {
            const seenSkus = new Set();
            productDto.variants = productDto.variants.map((variant, i) => {
                if (!variant.sku) {
                    variant.sku = `sku-${Date.now()}-${i}`;
                }
                if (seenSkus.has(variant.sku)) {
                    variant.sku = `${variant.sku}-${Math.floor(Math.random() * 10000)}`;
                }
                seenSkus.add(variant.sku);
                return variant;
            });
        }
        if (!productDto.slug && productDto.name) {
            const baseSlug = (0, slugify_1.slugify)(productDto.name);
            let slug = baseSlug;
            let count = 1;
            while (await this.productModel.exists({ slug })) {
                slug = `${baseSlug}-${count++}`;
            }
            productDto.slug = slug;
        }
        const product = new this.productModel(productDto);
        return product.save();
    }
    async findAll() {
        return this.productModel.find().exec();
    }
    async findOneById(id) {
        return this.productModel.findById(id).exec();
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(products_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
//# sourceMappingURL=products.service.js.map