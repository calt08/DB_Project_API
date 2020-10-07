import { Request, Response } from 'express';
import { authenticateToken } from '../utils/auth.utils';
import pool from '../utils/dbConnection.utils';

const router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let categories = await pool.query("SELECT * FROM country"); // SP to get all categories
    return res.status(200).send(categories.rows);
});

router.post('', async (req: Request, res: Response): Promise<Response> => {
    let categories = await pool.query("insert into country(countryname) VALUES ($1)", ["Panama"]); // SP to create category

    return res.status(200).send(categories);
});

export default router;