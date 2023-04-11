import { Module } from '@nestjs/common';
import { DepotService } from './depot.service';
import { DepotController } from './depot.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Depot, DepotSchema } from './entities/depot.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Depot.name,schema: DepotSchema}])],
  controllers: [DepotController],
  providers: [DepotService]
})
export class DepotModule {}
