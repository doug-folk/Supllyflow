import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { SupplierModel } from "../models/SupplierModel";
import { getToken } from "../utils/token";

export class SupplierRepository{
    static async create(data: SupplierModel, userId: string) {   

        const supplier =  await prisma.supplier.create({
            data: {
                name: data.name,
                userId: userId,
                cnpj:data.cnpj,
                reasonSocial: data.reasonSocial,
                email: data.email,
                telephone: data.telephone
            }
        })

        return supplier;    
    }

    static async findSuppliersUser(userId: string) {  

        const suppliers = await prisma.supplier.findMany({
            where: { userId: userId },
         });
        return suppliers;
    }

    static async updateSupplier(data: SupplierModel ) {
        const supplier = prisma.supplier.update({
            where: { id: data.id},
            data: data
        });

        return supplier;
    }

    static async deleteSupplier(idSupplier: string) {
        const supplier = await prisma.supplier.delete({
            where: { id: idSupplier },
        });
        return supplier;
    }

    
    static async getSupplier(idSupplier: string) {  

        const supplier = await prisma.supplier.findMany({
            where: {id: idSupplier},
         });
        return supplier;
    }


}
