import { Request, Response, Router } from 'express';
import { authenticateToken } from '../utils/auth.utils';
import pool from '../utils/dbConnection.utils';
import { LocationSchema } from '../Schemas/Location';

const router: Router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let invoices = await pool.query("SELECT * FROM country"); // SP to get all Countries
    return res.status(200).send(invoices.rows);
});

router.get('/:idcountry/cities', async (req: Request, res: Response): Promise<Response> => {
    let invoices = await pool.query("SELECT * FROM city"); // SP to get the cities of an specific country

    return res.status(200).send(invoices);
});

router.post('', async (req: Request, res: Response): Promise<Response> => {
    const validation = LocationSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation.error.message);

    let result = await pool.query("CALL create_country($1)", [validation.value.name]); // SP to create Country
    return res.status(201).send("Country created successfully");
});

router.post('/:idcountry/cities', async (req: Request, res: Response): Promise<Response> => {
    const validation = LocationSchema.validate(req.body);
    if (validation.error) return res.status(400).send(validation.error.message);

    let result = await pool.query("CALL create_city($1, $2)",
        [parseInt(<string>req.params.idcountry), validation.value.name]); // SP to create a city for an specific country
    return res.status(201).send("City created successfully");
});

export default router;