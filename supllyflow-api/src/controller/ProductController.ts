import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { ProductModel } from "../models/ProductModel";
import { getToken } from "../utils/token";
import { ProductRepository } from "../repositories/ProductRepository";

export class ProductController {
    async create(req: Request, res: Response) {
        try {
            const userId = getToken(req, res);

            const data: ProductModel = req.body;
            const result = await ProductRepository.createProduct(data, userId);

            return res.json({ result });
        } catch (error) {
            console.error("Erro ao criar producto:", error);
            return res.status(400).json("Erro ao criar produto");
        }
    }

    async findProductUser(req: Request, res: Response) {
        try {
            const userId = getToken(req, res);

            const products = await ProductRepository.findProductUser(userId);

            return res.json({ products });
        } catch (error) {
            console.error("Erro ao listar produtos:", error);
            return res.status(404).json("Erro ao listar produtos:");
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const data: ProductModel = req.body;

            const result = await ProductRepository.updateProduct(data);

            return res.json({ result });
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            return res.status(500).json("Erro ao atualizar produto");
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const idProduct = req.params.id;

            await ProductRepository.deleteProduct(idProduct);

            return res.json("Produto excluído com sucesso");
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
            return res.status(500).json("Erro ao excluir produto");
        }
    }
}
