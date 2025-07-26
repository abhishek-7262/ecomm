import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type ProductDocument = Product & Document;

@Schema({ _id: false }) // We’ll use `variantId` as a manual ID
export class Variant {
    @Prop({ required: true })
    variantId: string; // Custom ID (you can also auto-generate this with UUID or ObjectId)

    @Prop({ required: true })
    color: string;

    @Prop({ required: true })
    size: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    stock: number;
}

export const VariantSchema = SchemaFactory.createForClass(Variant);

@Schema()
export class Product {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop()
    imageUrl: string;

    @Prop({ unique: true, required: true })
    slug: string;

    @Prop({ type: [VariantSchema], default: [] })
    variants: Variant[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// Optional: Index variantId if needed
ProductSchema.index({ 'variants.variantId': 1 }, { unique: true, sparse: true });
