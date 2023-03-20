import { IsMongoId, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProduitDto {
    @IsString()
    nom: string;

    @IsMongoId()
    unite: string;

    @IsNumber()
    pa: number;

    @IsOptional()
    @IsNumber()
    qteStock: number;

    @IsNumber()
    pv:  number;
}
