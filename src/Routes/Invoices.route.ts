import { Request, Response, Router } from 'express';
import { authenticateToken } from '../utils/auth.utils';
import pool from '../utils/dbConnection.utils';

const router: Router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let invoices = await pool.query("SELECT * FROM country"); // SP to get all Invoices
    return res.status(200).send(invoices.rows);
});

router.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    let invoices = await pool.query("SELECT * FROM country"); // SP to get a specific Invoice

    return res.status(200).send(invoices);
});

router.post('', async (req: Request, res: Response): Promise<Response> => {
    let result = await pool.query("insert into country(countryname) VALUES ($1)", ["Panama"]); // SP to create Invoice

    return res.status(200).send(result);
});

export default router;