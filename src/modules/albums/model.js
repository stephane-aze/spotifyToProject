const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  idAlbum: joi.string().required(),
  favorisId: joi.string().required(),
  checked: joi.boolean().required(),
});

const updateModel = joi.object().keys({
  idAlbum: joi.string(),
  checked: joi.boolean(),
});

module.exports = {
  createModel,
  updateModel,
};
