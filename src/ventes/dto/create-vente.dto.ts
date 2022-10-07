import { IsMongoId, IsNumber, IsString } from "class-validator";

export class CreateVenteDto {
 @IsString()
 date: string;

 @IsMongoId()
 client: string;

 @IsMongoId()
 produit: string;

 @IsNumber()
 qte: number;
}
