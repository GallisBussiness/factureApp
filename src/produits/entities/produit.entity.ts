import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Document, Types } from "mongoose";
import { Unite, UniteSchema } from "src/unite/entities/unite.entity";

export type ProduitDocument = Produit & Document;

@Schema({ timestamps: true })
export class Produit {
    @Prop({ type: String, required: true })
    nom: string;

    @Prop({ type: Number, required: true })
    pa: number;

    @Prop({ type: Number, required: true })
    pv: number;
    
    @Prop({ type: Types.ObjectId, ref: Unite.name, required: true,autopopulate: true })
    @Type(() => Unite)
    unite: Unite;
}


export const ProduitSchema = SchemaFactory.createForClass(Produit);