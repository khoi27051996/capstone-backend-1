import { Controller, Post, UseGuards, Param, Req, Get } from '@nestjs/common';
import { LuuTruService } from './luu-tru.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard("jwt"))
@Controller('luu-tru')
export class LuuTruController {
  constructor(private readonly luuTruService: LuuTruService) { }

  // Tạo Api Lưu ảnh từ user by id img
  @Post('/save/:idImg')
  luuAnh(@Param("idImg") idImg: string, @Req() req) {
    let tokenDecode = req.user
    let { nguoi_dung_id } = tokenDecode.data
  
    return this.luuTruService.luuAnh(nguoi_dung_id, Number(idImg))
  }
  // Get danh sách hình đã lưu
  @Get('/get-list-save')
  getListSave() {
    return this.luuTruService.getListSave()
  } 

  //Get danh sách hình đã lưu theo User

  @Get('/get-list-save-by-user')
  getListSaveByUser(@Req() req) {
    let tokenDecode = req.user
    let {nguoi_dung_id} = tokenDecode.data
    return this.luuTruService.getListSaveByUser(nguoi_dung_id)
  }


}
