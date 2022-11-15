import { PartialType } from '@nestjs/mapped-types';
import { CreateVenteDetailDto } from './create-vente-detail.dto';

export class UpdateVenteDetailDto extends PartialType(CreateVenteDetailDto) {}
