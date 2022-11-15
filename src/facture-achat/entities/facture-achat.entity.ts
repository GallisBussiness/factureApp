import { Prop } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { Types } from "mongoose";
import { Achat, AchatSchema } from "src/achat/entities/achat.entity";
import { Fournisseur } from "src/fournisseur/entities/fournisseur.entity";

export class FactureAchat {
    @Prop({type: String, required: true})
    date:string;

    @Prop({type: Number, required: true})
    total:number;

    @Prop({type: Number, required: true,default: 0})
    avance:number;

    @Prop({type: Number, required: true,default: 0})
    restant:number;

    @Prop({type: Types.ObjectId, ref: Fournisseur.name, required: true, autopopulate: true})
    @Type(() => Fournisseur)
    Fournisseur: Fournisseur;

    @Prop({type: [{type: AchatSchema}], required: true})
    @Type(() => Achat)
    achats: Achat[];
}
