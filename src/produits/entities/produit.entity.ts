import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Document } from "mongoose";
import { Unite, UniteSchema } from "src/unite/entities/unite.entity";

export type ProduitDocument = Produit & Document;

@Schema({ timestamps: true })
export class Produit {
    @Prop({ type: String, required: true, unique: true })
    nom: string;
    
    @Prop({ type: [{type: UniteSchema}], required: true })
    @Type(() => Unite)
    unites: Unite
}


export const ProduitSchema = SchemaFactory.createForClass(Produit);