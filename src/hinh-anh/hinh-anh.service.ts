import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
@Injectable()
export class HinhAnhService {
    prisma = new PrismaClient

    createImg(body, nguoi_dung_id) {
        let { ten_hinh, duong_dan, mo_ta } = body

        let newImg = { ten_hinh, duong_dan, mo_ta, nguoi_dung_id, tinh_trang: true }

        return this.prisma.hinh_anh.create({ data: newImg })
    };

    async getListImg() {
        let data = await this.prisma.hinh_anh.findMany()
        let newData = data.filter((v) => v.tinh_trang == true)
        return newData
    }

    async getImgByName(body) {
        let { nameSearch } = body

        let data = await this.prisma.hinh_anh.findMany({
            where: {
                ten_hinh: {
                    contains: nameSearch
                }
            }
        });
        let dataTrue = data.filter((v) => v.tinh_trang == true)

        return dataTrue
    }

    getInfoImg(id: number) {
        let data = this.prisma.hinh_anh.findFirst({
            where: {
                hinh_id: id
            },
            include: {
                nguoi_dung: true
            }
        })

        return data
    };

    async getListImgByUser(nguoi_dung_id) {
        let data = await this.prisma.hinh_anh.findMany({
            where: {
                nguoi_dung_id
            }
        })
        let dataTrue = data.filter((v) => v.tinh_trang == true)
        return dataTrue
    };

    async xoaAnhDaTao(nguoi_dung_id, idImg: number) {
        let checkIdUser = await this.prisma.hinh_anh.findMany({
            where: {
                nguoi_dung_id
            }
        })
        if (checkIdUser.length > 0) {
            let checkIdImg = checkIdUser.find((v) => v.hinh_id == idImg)
            if (checkIdImg) {
                await this.prisma.hinh_anh.update({
                    where: {
                        hinh_id: idImg
                    },
                    data: {
                        tinh_trang: false
                    }
                })
                return "Xóa thành công !!!"
            } else {
                return "Bạn không có quyền xóa !!!"
            }
        } else {
            return "Bạn không có quyền xóa !!!"
        }
    }
}
