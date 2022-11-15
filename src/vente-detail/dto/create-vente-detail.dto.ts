import { IsNumber, IsString } from "class-validator";

export class CreateVenteDetailDto {
    @IsString()
    date: string;

    @IsNumber()
    montant: number;
}
