import * as Joi from "joi";

export const CategorySchema = Joi.object().keys({
    name: Joi.string().max(255).required()
})