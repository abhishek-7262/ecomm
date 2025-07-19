import { Product, ProductDocument } from './products.schema';
import { Model } from 'mongoose';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    create(productDto: Partial<Product>): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOneById(id: string): Promise<Product | null>;
}
