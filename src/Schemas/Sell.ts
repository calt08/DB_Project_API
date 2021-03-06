import * as Joi from "joi";

export const InvoiceSchema = Joi.object().keys({
    idpaymentmethod: Joi.number().positive().required(),
    idcustomer: Joi.number().positive().required()
})

export const CustomerSchema = Joi.object().keys({
    idcustomer: Joi.number().positive().required()
})

export const paymentmethodSchema = Joi.object().keys({
    name: Joi.string().required(),
})

export const SellDetailSchema = Joi.object().keys({
    iditem: Joi.number().positive().required(),
    quantity: Joi.number().positive().required(),
    idcustomer: Joi.number().positive().required()
})

export const SellDetailPatchSchema = Joi.object().keys({
    quantity: Joi.number().positive().required(),
})