import { Module } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { ProduitsController } from './produits.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Produit, ProduitSchema } from './entities/produit.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
    { name: Produit.name, schema: ProduitSchema },
  ]),],
  controllers: [ProduitsController],
  providers: [ProduitsService]
})
export class ProduitsModule {}
