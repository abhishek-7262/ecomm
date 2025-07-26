import { Module } from '@nestjs/common';
import { AddToCartController } from './add-to-cart.controller';
import { AddToCartService } from './add-to-cart.service';


@Module({
  controllers: [AddToCartController],
  providers: [AddToCartService]
})
export class AddToCartModule { }
