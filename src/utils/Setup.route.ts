import { Request, Response } from 'express';

const router = require('express').Router();

router.get('create', async (req: Request, res: Response): Promise<Response> => {
    let items //= await getRepository(Item).find();

    // SP to get all Items to the sell list or cart

    return res.status(200).send({ items });
});

router.get('drop', async (req: Request, res: Response): Promise<Response> => {
    let items //= await getRepository(Item).find();

    // SP to get all Items to the sell list or cart

    return res.status(200).send({ items });
});

export default router;