import { AddToCartService } from './add-to-cart.service';
import { AddToCart } from './add-to-cart.schema';
import { Product } from 'src/products/products.schema';
export declare class AddToCartController {
    private readonly addToCartService;
    constructor(addToCartService: AddToCartService);
    add(addToCart: Partial<AddToCart>): Promise<Product>;
}
