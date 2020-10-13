import * as Joi from "joi";

export const InvoiceSchema = Joi.object().keys({
    paymentmethod: Joi.number().positive().required(),
})

export const paymentmethodSchema = Joi.object().keys({
    name: Joi.string().required(),
})

export const SellDetailSchema = Joi.object().keys({
    iditem: Joi.number().positive().required(),
})
