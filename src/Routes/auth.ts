import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export function authenticateToken(req: Request, res: Response, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, 'SECRETVALUE', (err, user) => {
        if (err) return res.sendStatus(403);
        req.body.user = user;
        next();
    });
}
