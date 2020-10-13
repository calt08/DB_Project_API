import * as Joi from "joi";

export const LocationSchema = Joi.object().keys({
    name: Joi.string().max(100).required(),
})


