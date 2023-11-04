import { Test, TestingModule } from '@nestjs/testing';
import { HinhAnhService } from './hinh-anh.service';

describe('HinhAnhService', () => {
  let service: HinhAnhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HinhAnhService],
    }).compile();

    service = module.get<HinhAnhService>(HinhAnhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
