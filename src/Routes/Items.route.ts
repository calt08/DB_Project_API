import { Request, Response, Router } from 'express';
import { ItemSchema, ItemPatchSchema } from '../Schemas/Items';
import { authenticateToken } from '../utils/auth.utils';
import pool from '../utils/dbConnection.utils';

const router: Router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let items = await pool.query(""); // SP to get all Items
    return res.status(200).send(items);
});

router.get('/:categoryid', async (req: Request, res: Response): Promise<Response> => {
    let items = await pool.query(""); // SP to get all Items in a certain category

    return res.status(200).send({ items });
});

router.post('', async (req: Request, res: Response): Promise<Response> => {
    const validation = ItemSchema.validate(req.body);

    if (validation.error) return res.status(400).send(validation);

    let result = await pool.query(""); //SP to add Item

    return res.status(201).send(result);
});

router.patch('/:id', async (req: Request, res: Response): Promise<Response> => {
    const validation = ItemSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation);

    let result = await pool.query(""); // SP to modify existance of an item
    return res.status(200).send(result);
})

router.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(<string>req.params.id);
    let itemSelected //= await getRepository(Item).findOne(id);
    if (!itemSelected) return res.status(404).send(`There is no item with id: ${req.params.id}`);
    //If no rows are modified i can send a 404
    //That way I only have to do 1 request to the DB

    const result = await pool.query(""); // SP to delete one item
    return res.status(200).send();
});

export default router;