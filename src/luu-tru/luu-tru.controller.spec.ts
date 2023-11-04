import { Test, TestingModule } from '@nestjs/testing';
import { LuuTruController } from './luu-tru.controller';
import { LuuTruService } from './luu-tru.service';

describe('LuuTruController', () => {
  let controller: LuuTruController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LuuTruController],
      providers: [LuuTruService],
    }).compile();

    controller = module.get<LuuTruController>(LuuTruController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
