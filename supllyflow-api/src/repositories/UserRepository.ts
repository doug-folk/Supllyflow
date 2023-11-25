import { hash } from "bcryptjs";
import { UserModel } from "../models/UserModel";
import prisma from "../utils/prisma";

export class UserRepository {
    
    static async createUser(data: UserModel) {

        const has_password = await hash(data.password, 8);

        return prisma.user.create({
            data: {
                email: data.email,
                password: has_password,
                fantasyName: data.fantasyName,
                reasonSocial: data.reasonSocial,
                responsibleName: data.responsibleName,
                city: data.city,
                uf: data.uf,
                cnpj: data.cnpj,
                road: data.road,
                neighborhood: data.neighborhood,
                number: data.number,
                cep: data.cep,
            },
        });
    }
}
