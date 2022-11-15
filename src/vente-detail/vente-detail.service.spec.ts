import { Test, TestingModule } from '@nestjs/testing';
import { VenteDetailService } from './vente-detail.service';

describe('VenteDetailService', () => {
  let service: VenteDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VenteDetailService],
    }).compile();

    service = module.get<VenteDetailService>(VenteDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
