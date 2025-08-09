import { Document } from "mongoose";
export type AddToCartDocument = AddToCart & Document;
export declare class AddToCart {
    userId: string;
    productId: string;
    variantId: string;
    quantity: string;
}
export declare const AddToCartSchema: import("mongoose").Schema<AddToCart, import("mongoose").Model<AddToCart, any, any, any, Document<unknown, any, AddToCart, any> & AddToCart & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AddToCart, Document<unknown, {}, import("mongoose").FlatRecord<AddToCart>, {}> & import("mongoose").FlatRecord<AddToCart> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
