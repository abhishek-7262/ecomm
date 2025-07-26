import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class AddToCart {

    @Prop({ required: true })
    userId: string;

    @Prop()
    productId: string;
}