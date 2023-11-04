import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { HinhAnhModule } from './hinh-anh/hinh-anh.module';
import { BinhLuanModule } from './binh-luan/binh-luan.module';
import { LuuTruModule } from './luu-tru/luu-tru.module';
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [UserModule, HinhAnhModule, BinhLuanModule, LuuTruModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
