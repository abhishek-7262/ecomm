import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type userDocument = User & Document

@Schema()
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, index: true })
    mobileNo: number;

    @Prop({
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        unique: true
    })
    email: string;

    @Prop({ index: true })
    city: string;
};

export const UserSchema = SchemaFactory.createForClass(User);