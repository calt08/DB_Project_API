import { Request, Response, Router } from 'express';
import * as fs from 'fs';
import pool from '../utils/dbConnection.utils';

const router: Router = require('express').Router();

router.get('/build', async (req: Request, res: Response): Promise<Response> => {
    try {
        const TablesQueries = fs.readFileSync('SQL_Scripts/create_tables.sql').toString();
        const DMLQueries = fs.readFileSync('SQL_Scripts/DML_procedures.sql').toString();
        const SelectQueries = fs.readFileSync('SQL_Scripts/select_functions.sql').toString();
        const MockDataQueries = fs.readFileSync('SQL_Scripts/Mockdata.sql').toString();
        const tables = await pool.query(TablesQueries);
        const SP = await pool.query(DMLQueries);
        const selects = await pool.query(SelectQueries);
        const MockData = await pool.query(MockDataQueries);

        return res.status(200).send('Tables, Functions and Stored Procedures created');
    } catch (error) {
        return res.status(500).send({ msg: 'Something Unexpected happened', error })
    }
});

router.get('/drop', async (req: Request, res: Response): Promise<Response> => {
    let dropTables = await pool.query('DROP TABLE IF EXISTS city, country, customer, invoice, item, itemcategory, paymentmethod, sell, selldetails CASCADE;');
    let dropProcedures = await pool.query('DROP PROCEDURE IF EXISTS create_city, create_country, create_customer, create_invoice, create_item, create_itemcategory, create_paymentmethod, create_sell, create_selldetails;');
    let dropFunctions = await pool.query('DROP FUNCTION IF EXISTS get_user, get_sell, get_allitems, get_cat, get_items_cat;');

    return res.status(200).send('Tables, procedures and functions were droped successfully');
});

export default router;