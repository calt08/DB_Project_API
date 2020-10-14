import { Request, Response, Router } from 'express';
import { authenticateToken } from '../utils/auth.utils';
import pool from '../utils/dbConnection.utils';

const router: Router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let invoices = await pool.query("SELECT * FROM all_invoices($1)", [parseInt(<string>req.body.user.idcustomer)]); // SP to get all Invoices
    return res.status(200).send(invoices.rows);
});

router.get('/:idsell', async (req: Request, res: Response): Promise<Response> => {
    let invoice = await pool.query("SELECT * FROM items_in_sell($1)", [parseInt(<string>req.params.idsell)]); // SP to get a specific Invoice

    return res.status(200).send(invoice.rows);
});

export default router;