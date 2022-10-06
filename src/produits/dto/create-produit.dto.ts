import { IsNumber, IsString } from "class-validator";

export class CreateProduitDto {
    @IsString()
    nom: string;

    @IsNumber()
    pa: number;

    @IsNumber()
    pv: number;
}
