import { IsNumber, IsString } from "class-validator";

export class CreateUniteDto {
    @IsString()
    nom: string;

    @IsNumber()
    pa: number;

    @IsNumber()
    pv:  number;
}
