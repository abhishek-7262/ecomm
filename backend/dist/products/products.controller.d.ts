import { ProductsService } from './products.service';
import { Product } from './products.schema';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(product: Partial<Product>): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOneById(id: string): Promise<Product | null>;
}
