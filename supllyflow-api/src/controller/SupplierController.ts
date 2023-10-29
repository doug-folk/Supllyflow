import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { SupplierModel } from "../models/SupplierModel";
import { getToken } from "../utils/token";

export class SupplierController{
    async create(req: Request, res: Response) {   
        const userId = getToken(req, res);

        const { name,reasonSocial, cnpj, email, telephone } : SupplierModel = req.body;
        const supplier =  await prisma.supplier.create({
            data: {
                name,
                userId: userId,
                cnpj,
                reasonSocial,
                email,
                telephone
            }
        })

        return res.json({ supplier });    
    }

    async findSuppliersUser(req: Request, res: Response) {  
        const userId = getToken(req, res);

        const suppliers = await prisma.supplier.findMany({
            where: { userId: userId },
         });
        return res.json({suppliers})
    }
}
