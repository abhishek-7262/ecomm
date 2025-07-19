import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { slugify } from './utils/slugify';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) { }

    async create(productDto: Partial<Product>): Promise<Product> {
        if (productDto.variants && productDto.variants.length) {
            const seenSkus = new Set<string>();
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
            const baseSlug = slugify(productDto.name);
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

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async findOneById(id: string): Promise<Product | null> {
        return this.productModel.findById(id).exec();
    }
}
