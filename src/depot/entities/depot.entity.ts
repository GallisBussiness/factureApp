import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DepotDocument = Depot & Document;

@Schema({timestamps: true})
export class Depot {
    @Prop({type: String,required: true, unique: true})
    nom: string;
}

export const DepotSchema = SchemaFactory.createForClass(Depot);