const Joi = require('joi');

const productSchema = Joi.object({
    productname: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required()
});

module.exports =productSchema;