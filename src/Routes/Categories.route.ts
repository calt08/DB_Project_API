import { Request, Response } from 'express';
import { authenticateToken } from './auth';

const router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let items = "hola"//= await getRepository(Item).find();

    // SP to get all categories

    return res.status(200).send(req.body.user);
});

export default router;