import { Test, TestingModule } from '@nestjs/testing';
import { VenteDetailController } from './vente-detail.controller';
import { VenteDetailService } from './vente-detail.service';

describe('VenteDetailController', () => {
  let controller: VenteDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenteDetailController],
      providers: [VenteDetailService],
    }).compile();

    controller = module.get<VenteDetailController>(VenteDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
