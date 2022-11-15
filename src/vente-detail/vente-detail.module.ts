import { Module } from '@nestjs/common';
import { VenteDetailService } from './vente-detail.service';
import { VenteDetailController } from './vente-detail.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VenteDetail, VenteDetailSchema } from './entities/vente-detail.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:VenteDetail.name,schema: VenteDetailSchema}])],
  controllers: [VenteDetailController],
  providers: [VenteDetailService]
})
export class VenteDetailModule {}
