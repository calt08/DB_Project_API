import { Request, Response } from 'express';
import { authenticateToken } from './auth';

const router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let items //= await getRepository(Item).find();

    // SP to get all Items to the sell list or cart

    return res.status(200).send({ items });
});

router.post('', async (req: Request, res: Response): Promise<Response> => {
    let items //= await getRepository(Item).find();

    // SP to add Item to the sell list or cart

    return res.status(200).send({ items });
});

router.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    let items //= await getRepository(Item).find();

    // SP to remove Item to the sell list or cart

    return res.status(200).send({ items });
});

router.patch('/:id', async (req: Request, res: Response): Promise<Response> => {
    let items //= await getRepository(Item).find();

    // SP to add Item to the sell list or cart

    return res.status(200).send({ items });
});

export default router;