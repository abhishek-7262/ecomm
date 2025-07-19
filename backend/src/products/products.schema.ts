import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Variant {
    @Prop({ required: true })
    name: string;

    @Prop({ unique: true, sparse: true }) // Make SKU unique, but sparse (allow null/missing)
    sku: string;

    @Prop()
    price?: number; // Optional variant-specific price
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

// Create a unique sparse index on variants.sku to avoid errors on null/undefined SKUs
ProductSchema.index({ 'variants.sku': 1 }, { unique: true, sparse: true });
