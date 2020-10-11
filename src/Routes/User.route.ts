import { Request, Response, Router } from 'express';
import { LoginSchema, RegisterSchema } from '../Schemas/User';
import * as jwt from 'jsonwebtoken';
import pool from '../utils/dbConnection.utils';

const router: Router = require('express').Router();

router.post('/register', async (req: Request, res: Response): Promise<Response> => {
    const validation = RegisterSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation);
    let sameEmail = await pool.query("SELECT * FROM Get_User($1)", [validation.value.email]);

    // Find if email is in use by another consumer - Search user by email
    if (sameEmail.rows[0]) return res.status(409).send(`${req.body.email} is already on use by another customer`)

    const result = await pool.query("CALL create_customer($1, $2, $3, $4, $5, $6)",
        [validation.value.idcity, validation.value.email, validation.value.password,
        validation.value.name, validation.value.lastname, validation.value.address]);// Add the user to the DB

    return res.status(201).send("Customer created successfully");
});

router.post('/login', async (req: Request, res: Response): Promise<Response> => {

    const validation = LoginSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation);

    const result = await pool.query("SELECT * FROM Get_User($1)", [validation.value.email]); // Verify if the user exists - Search user by email

    if (!result.rows[0]) return res.status(401).send(`Invalid Email or password`);
    if (result.rows[0].passwordc != validation.value.password) return res.status(401).send(`Invalid Email or password`);

    const accessToken = jwt.sign(validation.value, 'SECRETVALUE')
    return res.status(201).send(accessToken);
});

export default router;