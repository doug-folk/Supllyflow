import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { SupplierModel } from "../models/SupplierModel";
import { getToken } from "../utils/token";
import { SupplierRepository } from "../repositories/SupplierRepository";

export class SupplierController {
    async create(req: Request, res: Response) {
        try {
            const userId = getToken(req, res);

            const data: SupplierModel = req.body;

            const result = await SupplierRepository.create(data, userId);

            return res.json({ result });

        } catch (error) {

            console.error("Erro ao criar fornecedor:", error);
            return res.status(400).json("Erro ao criar fornecedor");
        }
    }

    async findSuppliersUser(req: Request, res: Response) {
        try {
            const userId = getToken(req, res);

            const suppliers = await SupplierRepository.findSuppliersUser(userId);

            return res.json({ suppliers });

        } catch (error) {

            console.error("Erro ao listar fornecedores:", error);
            return res.status(404).json("Erro ao listar fornecedores:");
        }
    }

    async updateSupplier(req: Request, res: Response) {
        try {
            const data: SupplierModel = req.body;

            const result = await SupplierRepository.updateSupplier(data);

            return res.json({ result });

        } catch (error) {

            console.error("Erro ao atualizar fornecedor:", error);
            return res.status(500).json("Erro ao atualizar fornecedor");
        }
    }

    async deleteSupplier(req: Request, res: Response) {
        try {
            const idSupplier = req.params.id;

            await SupplierRepository.deleteSupplier(idSupplier);

            return res.json("Fornecedor excluído com sucesso");

        } catch (error) {

            console.error("Erro ao excluir fornecedor:", error);
            return res.status(500).json("Erro ao excluir fornecedor");
        }
    }

    async getSupplier(req: Request, res: Response) {
        try {
            const userId = getToken(req, res);

             const idSupplier = req.params.id;

            const supplier = await SupplierRepository.getSupplier(idSupplier);

            return res.json({ supplier });

        } catch (error) {

            console.error("Erro ao listar fornecedor:", error);
            return res.status(404).json("Erro ao listar fornecedor:");
        }
    }
}
