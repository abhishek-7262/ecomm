import { Module } from '@nestjs/common';
import { AddToCartController } from './add-to-cart.controller';

@Module({
  controllers: [AddToCartController]
})
export class AddToCartModule {}
