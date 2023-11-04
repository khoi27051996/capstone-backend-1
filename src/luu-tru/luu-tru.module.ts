import { Module } from '@nestjs/common';
import { LuuTruService } from './luu-tru.service';
import { LuuTruController } from './luu-tru.controller';

@Module({
  controllers: [LuuTruController],
  providers: [LuuTruService],
})
export class LuuTruModule {}
