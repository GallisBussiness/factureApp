import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Depot } from "src/depot/entities/depot.entity";
import { Produit } from "src/produits/entities/produit.entity";

export type StockDocument = Stock & Document;

export enum MOUVEMENT {
    ENTRE = "ENTREE",
    SORTIE = "SORTIE"
}

@Schema({timestamps: true})
export class Stock {
  
    @Prop({type: String, required: true,default: MOUVEMENT.ENTRE})
    type: string;

    @Prop({type: Types.ObjectId, ref: Produit.name, required: true, autopopulate: true})
    produit: Produit;

    @Prop({type: Types.ObjectId, ref: Depot.name, required: true,default:"64352b841a33290479fc2bd3", autopopulate: true})
    depot: Depot;

    @Prop({type: Number, required: true})
    qte: number;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
