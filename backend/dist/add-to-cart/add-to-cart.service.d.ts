import { AddToCart, AddToCartDocument } from './add-to-cart.schema';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/products/products.schema';
export declare class AddToCartService {
    private addToCartModel;
    private productModel;
    constructor(addToCartModel: Model<AddToCartDocument>, productModel: Model<ProductDocument>);
    add(addToCartDto: Partial<AddToCart>): Promise<Product>;
}
