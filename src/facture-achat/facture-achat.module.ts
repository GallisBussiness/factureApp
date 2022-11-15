import { Module } from '@nestjs/common';
import { FactureAchatService } from './facture-achat.service';
import { FactureAchatController } from './facture-achat.controller';

@Module({
  controllers: [FactureAchatController],
  providers: [FactureAchatService]
})
export class FactureAchatModule {}
