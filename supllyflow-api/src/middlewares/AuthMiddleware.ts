import { NextFunction } from "express";
import { Request, Response } from "express"
import { verify } from "jsonwebtoken";

type TokenPayload = {
    id: string;
    iat: number;
    exp: number;
}

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

export function AuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "Token not provided" });
    }

    const [, token] = authorization.split(" ");

    try {
        const decoded = verify(token, "secret");
        const { id } = decoded as TokenPayload;

        req.userId = id;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Token invalid" });
    }
}
