import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.schema';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    async create(@Body() product: Partial<Product>): Promise<Product> {
        return this.productsService.create(product)
    };

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll()
    };

    @Get()
    async findOneById(id: string): Promise<Product | null> {
        return this.productsService.findOneById(id)
    }
}
