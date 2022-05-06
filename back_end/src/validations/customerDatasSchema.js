const Joi = require('joi');

module.exports = Joi.object({
  nome: Joi.string().max(70).required(),
  tipo: Joi.string().max(15).required(),
  'CPF/CNPJ': Joi.string().max(20).required(),
  RG: Joi.string().max(20),
  grupo: Joi.string().max(10),
});
