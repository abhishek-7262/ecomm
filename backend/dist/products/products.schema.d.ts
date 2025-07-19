import { Document, Types } from "mongoose";
export type ProductDocument = Product & Document;
export declare class Variant {
    name: string;
    sku: string;
    price?: number;
}
export declare const VariantSchema: import("mongoose").Schema<Variant, import("mongoose").Model<Variant, any, any, any, Document<unknown, any, Variant, any> & Variant & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Variant, Document<unknown, {}, import("mongoose").FlatRecord<Variant>, {}> & import("mongoose").FlatRecord<Variant> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Product {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    slug: string;
    variants: Variant[];
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product, any> & Product & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>, {}> & import("mongoose").FlatRecord<Product> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
