import { Injectable } from '@nestjs/common';
import { CreateFactureAchatDto } from './dto/create-facture-achat.dto';
import { UpdateFactureAchatDto } from './dto/update-facture-achat.dto';

@Injectable()
export class FactureAchatService {
  create(createFactureAchatDto: CreateFactureAchatDto) {
    return 'This action adds a new factureAchat';
  }

  findAll() {
    return `This action returns all factureAchat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factureAchat`;
  }

  update(id: number, updateFactureAchatDto: UpdateFactureAchatDto) {
    return `This action updates a #${id} factureAchat`;
  }

  remove(id: number) {
    return `This action removes a #${id} factureAchat`;
  }
}
