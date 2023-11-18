import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { SupplierModel } from "../models/SupplierModel";
import { getToken } from "../utils/token";
import { SupplierRepository } from "../repositories/SupplierRepository";

export class SupplierController{
    async create(req: Request, res: Response) {   
        const userId = getToken(req, res);

        const data: SupplierModel = req.body;
        
        const result = await SupplierRepository.create(data, userId);  
        
        return res.json({result});   
    }

    async findSuppliersUser(req: Request, res: Response) {  
        const userId = getToken(req, res);

        const suppliers = await SupplierRepository.findSuppliersUser(userId);

        return res.json({suppliers})
    }

    async updateSupplier(req: Request, res: Response) {   
        // const userId = getToken(req, res);

        const data: SupplierModel = req.body;
        
        const result = await SupplierRepository.updateSupplier(data);  
        
        return res.json({result});   
    }

}
