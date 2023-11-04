import { Test, TestingModule } from '@nestjs/testing';
import { LuuTruService } from './luu-tru.service';

describe('LuuTruService', () => {
  let service: LuuTruService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LuuTruService],
    }).compile();

    service = module.get<LuuTruService>(LuuTruService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
