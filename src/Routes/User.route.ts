import { Request, Response } from 'express';
import { LoginSchema, RegisterSchema } from '../Schemas/User';
import * as jwt from 'jsonwebtoken';

const router = require('express').Router();

router.post('/register', async (req: Request, res: Response): Promise<Response> => {

    const validation = RegisterSchema.validate(req.body);
    if (validation.error) {
        return res.status(400).send(validation);
    }

    // Find if email is in use by another consumer
    if (false) return res.status(409).send(`${req.body.email} is already on use by another user`)

    // Add the user to the DB

    return res.status(201).send();
});

router.post('/login', async (req: Request, res: Response): Promise<Response> => {

    const validation = LoginSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation);

    // Verify if the user exists

    const user = req.body;


    const accessToken = jwt.sign(user, 'SECRETVALUE')
    return res.status(201).send(accessToken);
});

export default router;