import { Test, TestingModule } from '@nestjs/testing';
import { HinhAnhController } from './hinh-anh.controller';
import { HinhAnhService } from './hinh-anh.service';

describe('HinhAnhController', () => {
  let controller: HinhAnhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HinhAnhController],
      providers: [HinhAnhService],
    }).compile();

    controller = module.get<HinhAnhController>(HinhAnhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
