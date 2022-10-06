import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Document, Types } from "mongoose";
import { Client } from "src/client/entities/client.entity";
import { Produit } from "src/produits/entities/produit.entity";

export type VenteDocument = Vente & Document;

@Schema({ timestamps: true })
export class Vente {
    @Prop({ type: String, required: true })
    date: string;

    @Prop({type: Types.ObjectId, required: true, ref: Client.name})
    @Type(() => Client)
    client: Client;

    @Prop({type: [{type: Types.ObjectId, ref: Produit.name}], required: true})
    @Type(() => Produit)
    produits: Produit;
}


export const VenteSchema = SchemaFactory.createForClass(Vente);