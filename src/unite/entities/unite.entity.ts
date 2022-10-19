import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UniteDocument = Unite & Document;

@Schema({timestamps: true})
export class Unite {
    @Prop({ type: String, required: true, unique: true })
    nom: string;

    @Prop({type: Number,required: true})
    pa: number;

    @Prop({type: Number, required: true})
    pv:  number;
}

export const UniteSchema = SchemaFactory.createForClass(Unite);