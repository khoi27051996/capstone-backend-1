import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class LuuTruService {
    prisma = new PrismaClient

    async luuAnh(nguoi_dung_id: number, idImg: number) {
        let listSaveByUser = await this.prisma.luu_anh.findMany({
            where: {
                nguoi_dung_id
            }
        })
        let data = listSaveByUser.find(v => v.hinh_id == idImg)

        if (data) {
            return false
        } else {
            let newData = { nguoi_dung_id, hinh_id: idImg }
            return this.prisma.luu_anh.create({ data: newData })
        }

    }

    getListSave() {
        let data = this.prisma.luu_anh.findMany()

        return data
    };

    async getListSaveByUser(nguoi_dung_id) {
        let data = await this.prisma.luu_anh.findMany({
            where: {
                nguoi_dung_id
            }
        })
        return data
    }
}
