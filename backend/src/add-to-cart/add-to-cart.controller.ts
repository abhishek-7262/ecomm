import { Body, Controller, Post } from '@nestjs/common';
import { AddToCartService } from './add-to-cart.service';
import { AddToCart } from './add-to-cart.schema';
import { Product } from 'src/products/products.schema';

@Controller('cart')
export class AddToCartController {
    constructor(private readonly addToCartService: AddToCartService) { }

    @Post()
    async add(@Body() addToCart: Partial<AddToCart>): Promise<Product> {
        return this.addToCartService.add(addToCart)
    }
}
