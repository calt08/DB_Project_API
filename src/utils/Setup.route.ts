import { Request, Response, Router } from 'express';
import * as fs from 'fs';
import pool from '../utils/dbConnection.utils';

const router: Router = require('express').Router();

router.get('/build', async (req: Request, res: Response): Promise<Response> => {
    try {
        const TablesQueries = fs.readFileSync('SQL_Scripts/create_tables.sql').toString();
        const DMLQueries = fs.readFileSync('SQL_Scripts/DML_procedures.sql').toString();
        const SelectQueries = fs.readFileSync('SQL_Scripts/select_functions.sql').toString();
        const tables = await pool.query(TablesQueries);
        const SP = await pool.query(DMLQueries);
        const selects = await pool.query(SelectQueries);

        return res.status(200).send({ msg: 'Tables, Functions and Stored Procedures created', tables, SP, selects });
    } catch (error) {
        return res.status(500).send({ msg: 'Something Unexpected happened', error })
    }
});

router.get('/drop', async (req: Request, res: Response): Promise<Response> => {
    let items //= await getRepository(Item).find();

    // SP to get all Items to the sell list or cart

    return res.status(200).send({ items });
});

export default router;