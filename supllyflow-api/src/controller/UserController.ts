import { hash } from "bcryptjs";
import prisma from "../utils/prisma";
import { Request, Response } from "express";
import {UserModel} from "../models/UserModel";
import { sign } from "jsonwebtoken";
export class UserController {
  async index(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    return res.json({ users });
  }

  async store(req: Request, res: Response) {
    const {
      email,
      password,
      fantasyName,
      reasonSocial,
      responsibleName,
      fieldOfActivity,
      city,
      uf,
      road,
      neighborhood,
      number,
      cnpj
    }: UserModel = req.body;

    const userExists = await prisma.user.findUnique({ where: { email } });

    if (userExists) {
      return res.json({ error: "User exists" });
    }

    const has_password = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        email,
        password: has_password,
        fantasyName,
        reasonSocial,
        responsibleName,
        fieldOfActivity,
        city,
        uf,
        cnpj,
        road,
        neighborhood,
        number,
      },
    });

    const token = sign({ id: user.id }, "secret", { expiresIn: "7d" });

    return res.json({ 
        id: user.id,
        email,
        token
     });
  }
}
