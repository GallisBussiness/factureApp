import { IsArray, IsMongoId, IsString } from "class-validator";

export class CreateVenteDto {
 @IsString()
 date: string;

 @IsMongoId()
 client: string;

 @IsArray()
 produits: string[];
}
