import * as Joi from "joi";

export const LoginSchema = Joi.object().keys({
    email: Joi.string().max(255).required(),
    password: Joi.string().max(255).required(),
})

export const RegisterSchema = Joi.object().keys({
    idcity: Joi.number().required(),
    email: Joi.string().max(255).required(),
    password: Joi.string().max(50).required(),
    name: Joi.string().max(50).required(),
    lastname: Joi.string().max(50).required(),
    address: Joi.string().max(255).required(),
    admin: Joi.bool()
})