import { hash } from "bcryptjs";
import prisma from "../utils/prisma";
import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";
import { sign } from "jsonwebtoken";
import { UserRepository } from "../repositories/UserRepository";
import { getToken } from "../utils/token";
export class UserController {
  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    return res.json({ users });
  }

  async createUser(req: Request, res: Response) {
    const data: UserModel = req.body;

    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      return res.json({ error: "User exists" });
    }

    const result = await UserRepository.createUser(data);

    const token = sign({ id: result.id }, "secret", { expiresIn: "7d" });

    return res.json({
      id: result.id,
      email: result.email,
      token,
    });
  }

  async getProfileUser(req: Request, res: Response) {
        try {
            const userId = getToken(req, res);

            const user = await UserRepository.getProfileUser(userId);

            return res.json({ user });

        } catch (error) {

            console.error("Erro ao listar fornecedor:", error);
            return res.status(404).json("Erro ao listar fornecedor:");
        }
  }
}
