import { Request, Response, Router } from 'express';
import { authenticateToken } from '../utils/auth.utils';
import pool from '../utils/dbConnection.utils';

const router: Router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let items = pool.query(""); // SP to get all Items to the sell list or cart

    return res.status(200).send({ items });
});

router.post('', async (req: Request, res: Response): Promise<Response> => {
    let items = await pool.query(""); // SP to add Item to the sell list or cart
    // We cant add items already added
    return res.status(200).send({ items });
});

router.patch('/:itemid', async (req: Request, res: Response): Promise<Response> => {
    let items = await pool.query("");// SP to modify amount of an Item on the cart

    return res.status(200).send({ items });
});

export default router;