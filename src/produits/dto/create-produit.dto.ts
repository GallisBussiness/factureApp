import { IsNumber, IsString } from "class-validator";
import { Unite } from "src/unite/entities/unite.entity";

export class CreateProduitDto {
    @IsString()
    nom: string;

    unites: Unite[]
}
