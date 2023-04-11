import { IsString } from "class-validator";

export class CreateDepotDto {
    @IsString()
    nom: string;
}
