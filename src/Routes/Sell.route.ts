import { Request, Response, Router } from 'express';
import { authenticateToken } from '../utils/auth.utils';
import pool from '../utils/dbConnection.utils';
import { InvoiceSchema, paymentmethodSchema, SellDetailSchema, CustomerSchema, SellDetailPatchSchema } from '../Schemas/Sell';

const router: Router = require('express').Router();
// router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    const validation = CustomerSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation.error.message);

    let currentSell = await pool.query("SELECT * FROM get_sell($1)", [parseInt(<string>validation.value.idcustomer)]); // Function to get the sell a user is using at the moment
    let items = await pool.query("SELECT * FROM items_in_sell($1)", [currentSell.rows[0].idsell]); // SP to get all Items to the sell list or cart

    return res.status(200).send(items.rows);
});

router.post('', async (req: Request, res: Response): Promise<Response> => {
    const validation = SellDetailSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation.error.message);

    let currentSell = await pool.query("SELECT * FROM get_sell($1)", [parseInt(<string>validation.value.idcustomer)]); // Function to get the sell a user is using at the moment
    let items = await pool.query("CALL create_selldetails($1, $2, $3)", [currentSell.rows[0].idsell,
    parseInt(<string>validation.value.iditem), parseInt(<string>validation.value.quantity)]); // SP to create sell detail AKA to add Item to the sell list or cart
    // We cant add items already added
    return res.status(200).send(`${validation.value.quantity} Items ID: ${validation.value.iditem} added to sell`);
});

router.patch('/:idselldetail', async (req: Request, res: Response): Promise<Response> => {
    const validation = SellDetailPatchSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation.error.message);

    let idselldetail = parseInt(<string>req.params.idselldetail);
    await pool.query("CALL update_selldetails_quantity($1, $2)", [idselldetail, parseInt(validation.value.quantity)]); // SP to modify amount of an Item on the cart

    return res.status(200).send('Amount of sell detail updated successfully');
});

router.post('/pay', async (req: Request, res: Response): Promise<Response> => {
    const validation = InvoiceSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation);

    let currentSell = await pool.query("SELECT * FROM get_sell($1)", [parseInt(<string>validation.value.idcustomer)]); // Function to get the sell a user is using at the moment
    let invoice = await pool.query("CALL create_invoice($1, $2, $3)", [currentSell.rows[0].idsell, parseInt(validation.value.idpaymentmethod), true]); // Function to create invoice with the sell currently in use
    let newSell = await pool.query("CALL create_sell($1)", [parseInt(<string>validation.value.idcustomer)]) // Function to create new sell after the previous one is paid


    // need to update the quantity of the items sold
    return res.status(200).send('Invoice and new Sell created successfully');
});

router.get('/paymentmethod', async (req: Request, res: Response): Promise<Response> => {
    let results = await pool.query("SELECT * FROM paymentmethod") // Function get all paymnent methods

    return res.status(200).send(results.rows);
});

router.post('/paymentmethod', async (req: Request, res: Response): Promise<Response> => {
    const validation = paymentmethodSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation.error.message);
    let newPaymentMethod = await pool.query("CALL create_paymentmethod($1)", [validation.value.name]) // SP to create new payment method

    return res.status(201).send('Payment Method created successfully');
});

export default router;