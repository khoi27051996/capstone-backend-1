import { Body, Controller, Post, UseGuards, Req, Get, Param, Delete } from '@nestjs/common';
import { HinhAnhService } from './hinh-anh.service';
import { AuthGuard } from '@nestjs/passport'

@UseGuards(AuthGuard("jwt"))
@Controller('hinh-anh')
export class HinhAnhController {
  constructor(private readonly hinhAnhService: HinhAnhService) { }

  // Tạo ảnh mới theo id user
  @Post('/post-image')
  createImage(@Body() body, @Req() req) {
    let tokenDecode = req.user
    let { nguoi_dung_id } = tokenDecode.data
    return this.hinhAnhService.createImg(body, nguoi_dung_id)
  }

  // Get Danh sảnh ảnh 
  @Get('/get-list-img')
  getListImg() {
    return this.hinhAnhService.getListImg()
  }

  // Get danh sách ảnh theo tên tìm kiếm
  @Get('/get-img-by-name')
  getImgByName(@Body() body) {
    return this.hinhAnhService.getImgByName(body)
  }

  //Get thông tin người chi tiết tạo theo id của ảnh
  @Get('/get-info-img/:id')
  getInfoImg(@Param("id") id: string) {
    return this.hinhAnhService.getInfoImg(Number(id))
  }

  //Get danh sách ảnh đã tạo theo user
  @Get('/get-list-by-user')
  getListImgByUser(@Req() req) {
    let tokenDecode = req.user
    let { nguoi_dung_id } = tokenDecode.data
    return this.hinhAnhService.getListImgByUser(nguoi_dung_id)
  }

  //Xóa ảnh đã tạo theo id ảnh 

  @Delete('/delete/:idImg')
  xoaAnhDaTao(@Req() req, @Param("idImg") idImg: string) {
    let tokenDecode = req.user
    let { nguoi_dung_id } = tokenDecode.data
    return this.hinhAnhService.xoaAnhDaTao(nguoi_dung_id, Number(idImg))
  }
}
