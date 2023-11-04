import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(private jwtService: JwtService) { }
    prisma = new PrismaClient

    getListUser() {
        let data = this.prisma.nguoi_dung.findMany()
        return data
    }

    async signUp(body) {
        let { ho_ten, email, mat_khau } = body


        let checkEmail = await this.prisma.nguoi_dung.findFirst({
            where: {
                email: email
            }
        })
        if (checkEmail) {
            return "Email đã tồn tại !!!"
        } else {

            let data = this.prisma.nguoi_dung.create({ data: { ho_ten, email, mat_khau } })


            return data
        }
    }

    async signIn(body) {
        let { email, mat_khau } = body

        let checkEmail = await this.prisma.nguoi_dung.findFirst({
            where: {
                email: email
            }
        })
        if (checkEmail) {
            if (mat_khau == checkEmail.mat_khau) {
                let token = this.jwtService.sign({ data: checkEmail }, { expiresIn: "60m", secret: "LOGINKEY" })

                return token
            } else {
                return "Sai mật khẩu !!!"
            }
        } else {
            return "Email sai !!!"
        }
    }

    getUserById(id: number) {

        let data = this.prisma.nguoi_dung.findFirst({
            where: {
                nguoi_dung_id: id
            }
        });

        return data
    }

    async updateUser(body, nguoi_dung_id) {
        let { ho_ten, tuoi, anh_dai_dien } = body

        let data = await this.prisma.nguoi_dung.update({
            where: {
                nguoi_dung_id
            },
            data: {
                ho_ten,
                tuoi,
                anh_dai_dien
            }
        })
        return data
    };

    async updatePass(body, nguoi_dung_id) {
        let { mat_khau_cu, mat_khau_moi } = body
        let data = await this.prisma.nguoi_dung.findFirst({
            where: {
                nguoi_dung_id
            }
        })
        if (data.mat_khau == mat_khau_cu) {
            await this.prisma.nguoi_dung.update({
                where: {
                    nguoi_dung_id
                },
                data: {
                    mat_khau: mat_khau_moi
                }
            })
            return "Đổi mật khẩu thành công !!"
        } else {
            return "Sai mật khẩu cũ"
        }
    }
}
