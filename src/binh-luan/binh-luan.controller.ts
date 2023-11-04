import { Controller, Post, Body, UseGuards, Param, Req, Get } from '@nestjs/common';
import { BinhLuanService } from './binh-luan.service';
import { AuthGuard } from '@nestjs/passport'

@UseGuards(AuthGuard("jwt"))
@Controller('binh-luan')
export class BinhLuanController {
  constructor(private readonly binhLuanService: BinhLuanService) { }


  // Post bình luận theo id ảnh
  @Post('/post-bl/:idImg')
  postBinhLuan(@Body() body, @Req() req, @Param("idImg") idImg: string) {
    let tokenDecode = req.user
    let { nguoi_dung_id } = tokenDecode.data
    return this.binhLuanService.postBinhLuan(body, Number(idImg), nguoi_dung_id)
  }

  @Get('/get-bl/:idImg')
  getBinhLuanById(@Param("idImg") idImg: string) {
    return this.binhLuanService.getBinhLuanById(Number(idImg))
  }
}
