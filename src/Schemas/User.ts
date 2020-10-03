import * as Joi from "joi";

export const LoginSchema = Joi.object().keys({
    email: Joi.string().max(255).required(),
    password: Joi.string().max(255).required(),
})

export const RegisterSchema = Joi.object().keys({
    email: Joi.string().max(255).required(),
    password: Joi.string().max(255).required(),
})