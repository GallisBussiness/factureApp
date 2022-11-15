import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenteDetailService } from './vente-detail.service';
import { CreateVenteDetailDto } from './dto/create-vente-detail.dto';
import { UpdateVenteDetailDto } from './dto/update-vente-detail.dto';

@Controller('vente-detail')
export class VenteDetailController {
  constructor(private readonly venteDetailService: VenteDetailService) {}

  @Post()
  create(@Body() createVenteDetailDto: CreateVenteDetailDto) {
    return this.venteDetailService.create(createVenteDetailDto);
  }

  @Get()
  findAll() {
    return this.venteDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venteDetailService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenteDetailDto: UpdateVenteDetailDto) {
    return this.venteDetailService.update(id, updateVenteDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venteDetailService.remove(id);
  }
}
