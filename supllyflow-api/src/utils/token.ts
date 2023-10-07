import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

type TokenPayload = {
    id: string;
    iat: number;
    exp: number;
}

type Decoded = {
    id: string;
}

export function getToken(req: Request, res: Response) : string{
    const { authorization } = req.headers;
    if (!authorization) {
        return "Token not provided";
    }
    const [, token] = authorization.split(" ");
    const decoded = verify(token, "secret");
    const { id }: Decoded = decoded as TokenPayload;
    
    return id;
}
