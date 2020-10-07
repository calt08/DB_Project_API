import { Request, Response } from 'express';
import { ItemSchema, ItemPatchSchema } from '../Schemas/Items';
import { authenticateToken } from '../utils/auth.utils';

const router = require('express').Router();
router.use(authenticateToken);

router.get('', async (req: Request, res: Response): Promise<Response> => {
    let items //= await getRepository(Item).find();

    if (req.query.startDate) {
        const startDate = new Date(<string>req.query.startDate);
        items = items.filter(item => new Date(item.dueDate) >= startDate);
    }
    if (req.query.endDate) {
        const endDate = new Date(<string>req.query.endDate);
        items = items.filter(item => new Date(item.dueDate) <= endDate);
    }
    if (req.query.status) {
        items = items.filter(item => item.status == JSON.parse(<string>req.query.status));
    }

    return res.status(200).send({ items });
});

router.post('', async (req: Request, res: Response): Promise<Response> => {
    const validation = ItemSchema.validate(req.body);

    if (validation.error) {
        return res.status(400).send(validation);
    }

    let user// = await getRepository(User).findOne({ where: { email: req.auth.user } });

    validation.value.user = user; // Added the user to the object

    //const newItem //= getRepository(Item).create(validation.value);
    let result //= await getRepository(Item).save(newItem);

    return res.status(201).send(result);
});

router.put('/:id', async (req: Request, res: Response): Promise<Response> => {
    const validation = ItemSchema.validate(req.body);

    if (validation.error) {
        return res.status(400).send(validation);
    }

    let itemSelected //= await getRepository(Item).findOne(parseInt(<string>req.params.id));
    if (itemSelected) {

        if (parseInt(<string>req.headers.etag) == itemSelected.version) {
            //const itemUpdated = getRepository(Item).merge(itemSelected, req.body);
            let result //= await getRepository(Item).save(itemUpdated);
            return res.status(200).send(result);
        }
        return res.status(409).send('You don\'t have the last version of this Item');

    } else {
        return res.status(404).send('Item not found');
    }
})

router.delete('/:id', async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(<string>req.params.id);
    let itemSelected //= await getRepository(Item).findOne(id);
    if (!itemSelected) {
        return res.status(404).send(`There is no item with id: ${req.params.id}`)
    }

    if (parseInt(<string>req.headers.etag) == itemSelected.version) {
        let result// = await getRepository(Item).delete(id);
        return res.status(200).send();
    }
    return res.status(409).send('You don\'t have the last version of this Item');
});

export default router;