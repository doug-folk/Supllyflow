import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { verify } from "jsonwebtoken";
import { ProductModel } from "../models/ProductModel";
import { getToken } from "../utils/token";

export class ProductController{
    async create(req: Request, res: Response) {
        const { name, supplierId, description,amount, category }: ProductModel = req.body;
        
        const userId = getToken(req, res);

        const product =  await prisma.product.create({
            data: {
                name,
                supplierId,
                userId,
                description,
                amount,
                category
            }
        })

        return res.json({ product });    
    }

    async findProductUser(req: Request, res: Response) {
        const userId = getToken(req, res);
        const products = await prisma.product.findMany({
            where: { userId: userId }
        })

        return res.json({products})
    }
}
