import { Module } from '@nestjs/common';
import { AddToCartController } from './add-to-cart.controller';
import { AddToCartService } from './add-to-cart.service';
import { AddToCart, AddToCartSchema } from './add-to-cart.schema';
import { Product, ProductSchema } from 'src/products/products.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AddToCart.name, schema: AddToCartSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  controllers: [AddToCartController],
  providers: [AddToCartService],
  exports: [AddToCartService],
})
export class AddToCartModule { }
