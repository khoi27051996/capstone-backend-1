import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
@Injectable()
export class BinhLuanService {
    prisma = new PrismaClient

    postBinhLuan(body, idImg, nguoi_dung_id) {
        let { noi_dung } = body

        let newBl: any = { nguoi_dung_id, hinh_id: idImg, noi_dung, ngay_binh_luan: new Date() }

        return this.prisma.binh_luan.create({ data: newBl })
    }

    getBinhLuanById(idImg) {
        let data = this.prisma.binh_luan.findMany({
            where: {
                hinh_id: idImg
            }
        })

        return data
    }
}
