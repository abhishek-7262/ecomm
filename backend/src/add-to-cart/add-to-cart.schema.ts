import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type AddToCartDocument = AddToCart & Document

@Schema()
export class AddToCart {

    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    productId: string;

    @Prop({ required: true })
    variantId: string;

    @Prop()
    quantity: string;
}

export const AddToCartSchema = SchemaFactory.createForClass(AddToCart)
AddToCartSchema.set('timestamps', true)