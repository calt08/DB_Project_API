import { Request, Response, Router } from 'express';
import { authenticateToken } from '../utils/auth.utils';
import { CategorySchema } from '../Schemas/Category';
import pool from '../utils/dbConnection.utils';

const router: Router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let categories = await pool.query("SELECT * FROM itemcategory"); // SP to get all categories
    return res.status(200).send(categories.rows);
});

router.post('', async (req: Request, res: Response): Promise<Response> => {
    const validation = CategorySchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation.error.message);
    let category = await pool.query("CALL create_itemcategory($1)", [validation.value.name]); // SP to create category

    return res.status(201).send('Category created successfully');
});

export default router;