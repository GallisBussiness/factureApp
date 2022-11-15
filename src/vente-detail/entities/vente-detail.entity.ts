import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type VenteDetailDocument = VenteDetail & Document;

@Schema({timestamps: true})
export class VenteDetail {
    @Prop({type: String, required: true})
    date:string;

    @Prop({ type: Number, required: true })
    montant: number;
}

export const VenteDetailSchema = SchemaFactory.createForClass(VenteDetail);