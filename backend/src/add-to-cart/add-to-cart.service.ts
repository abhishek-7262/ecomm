import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddToCart, AddToCartDocument } from './add-to-cart.schema';
import { Model } from 'mongoose';

import { Product, ProductDocument } from 'src/products/products.schema';

@Injectable()
export class AddToCartService {
    constructor(
        @InjectModel(AddToCart.name) private addToCartModel: Model<AddToCartDocument>,
        @InjectModel(Product.name) private productModel: Model<ProductDocument>
    ) { }

    async add(addToCartDto: Partial<AddToCart>): Promise<Product> {
        const { variantId, quantity = 1 } = addToCartDto
        console.log(quantity, " qty")

        const product = await this.productModel.findOne(
            { 'variants.variantId': variantId }
        );

        if (!product) {
            throw new Error('product not found')
        }

        return product;
    }
}
