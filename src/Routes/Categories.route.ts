import { Request, Response } from 'express';
import { authenticateToken } from '../utils/auth.utils';
import pool from '../utils/dbConnection.utils';

const router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let categories = await pool.query("SELECT * FROM country");

    // SP to get all categories

    return res.status(200).send(categories.rows);
});

export default router;