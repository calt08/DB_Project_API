import { Request, Response } from 'express';
import { LoginSchema, RegisterSchema } from '../Schemas/User';
import * as jwt from 'jsonwebtoken';
import pool from '../utils/dbConnection.utils';

const router = require('express').Router();

router.post('/register', async (req: Request, res: Response): Promise<Response> => {
    const validation = RegisterSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation);


    // Find if email is in use by another consumer - Search user by email
    if (1 == 1) return res.status(409).send(`${req.body.email} is already on use by another user`)

    const result = pool.query("");// Add the user to the DB

    return res.status(201).send(result);
});

router.post('/login', async (req: Request, res: Response): Promise<Response> => {

    const validation = LoginSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation);


    const result = pool.query(""); // Verify if the user exists - Search user by email
    const user = req.body;

    const accessToken = jwt.sign(user, 'SECRETVALUE')
    return res.status(201).send(accessToken);
});

export default router;