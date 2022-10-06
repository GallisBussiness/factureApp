import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProduitDocument = Produit & Document;

@Schema({ timestamps: true })
export class Produit {
    @Prop({ type: String, required: true, unique: true })
    nom: string;

    @Prop({type: Number, required: true})
    pa: number;

    @Prop({type: Number, required: true})
    pv: number;
    
}


export const ProduitSchema = SchemaFactory.createForClass(Produit);