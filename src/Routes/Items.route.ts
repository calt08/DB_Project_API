import { Request, Response, Router } from 'express';
import { ItemSchema, ItemPatchSchema } from '../Schemas/Items';
import { authenticateToken } from '../utils/auth.utils';
import pool from '../utils/dbConnection.utils';

const router: Router = require('express').Router();
// router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let items = await pool.query("SELECT * FROM get_allitems()"); // SP to get all Items
    return res.status(200).send(items.rows);
});

router.get('/:itemid', async (req: Request, res: Response): Promise<Response> => {
    let items = await pool.query("SELECT * FROM get_item($1)", [parseInt(<string>req.params.itemid)]); // SP to get all Items in a certain category

    return res.status(200).send(items.rows);
});

router.get('/category/:categoryid', async (req: Request, res: Response): Promise<Response> => {
    let items = await pool.query("SELECT * FROM get_items_cat($1)", [parseInt(<string>req.params.categoryid)]); // SP to get all Items in a certain category

    return res.status(200).send(items.rows);
});

router.post('/category/:categoryid', async (req: Request, res: Response): Promise<Response> => {
    const validation = ItemSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation.error.message);

    let result = await pool.query("CALL create_item($1, $2, $3, $4, $5, $6, $7)",
        [parseInt(<string>req.params.categoryid), validation.value.itemname, parseFloat(<string>validation.value.price), parseFloat(<string>validation.value.tax),
        validation.value.photo, validation.value.description, validation.value.quantity]); //SP to add Item

    return res.status(201).send("Item created successfully");
});

router.patch('/:iditem', async (req: Request, res: Response): Promise<Response> => {
    const validation = ItemPatchSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation.error.message);

    let iditem = parseInt(<string>req.params.iditem);
    // SP to modify existance of an item
    if (validation.value.itemname) {
        await pool.query("CALL update_item_name($1, $2)", [iditem, validation.value.itemname]);
    }
    if (validation.value.price) {
        await pool.query("CALL update_item_price($1, $2)", [iditem, parseFloat(validation.value.price)]);
    }
    if (validation.value.tax) {
        await pool.query("CALL update_item_tax($1, $2)", [iditem, parseFloat(validation.value.tax)]);
    }
    if (validation.value.photo) {
        await pool.query("CALL update_item_photo($1, $2)", [iditem, validation.value.photo]);
    }
    if (validation.value.description) {
        await pool.query("CALL update_item_description($1, $2)", [iditem, validation.value.description]);
    }
    if (validation.value.quantity) {
        await pool.query("CALL update_item_quantity($1, $2)", [iditem, parseInt(validation.value.quantity)]);
    }
    return res.status(200).send("Item was edited successfully");
})

// router.delete('/:iditem', async (req: Request, res: Response): Promise<Response> => {
//     const id = parseInt(<string>req.params.id);
//     const result = await pool.query("DELETE FROM item WHERE iditem = $1 CASCADE", [parseInt(<string>req.params.iditem)]); // SP to delete one item
//     if (result.rowCount == 0) return res.status(404).send(`There is no item with id: ${req.params.iditem}`);
//     //If no rows are modified i can send a 404
//     //That way I only have to do 1 request to the DB

//     return res.status(200).send('Item deleted successfully');
// });

export default router;