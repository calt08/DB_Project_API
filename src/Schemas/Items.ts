import * as Joi from "joi";

export const ItemSchema = Joi.object().keys({
    name: Joi.string().max(100).required(),
    price: Joi.number().required(),
    tax: Joi.number().required(),
    photo: Joi.string().required(),
    description: Joi.string().required(),
    quantity: Joi.number().required()
})

export const ItemPatchSchema = Joi.object().keys({
    name: Joi.string().max(100),
    price: Joi.number(),
    tax: Joi.number(),
    photo: Joi.string(),
    description: Joi.string(),
    quantity: Joi.number()
})

