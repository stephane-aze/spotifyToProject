const isUndefined = require('lodash/isUndefined');
const searchAlbums = require('../../helpers/searchAlbums');
const autorizate = require('../../helpers/autorisation');

/* eslint-disable no-console */
module.exports = (req, res, next) => {
  const {
    term,
    limit,
    offset,
  } = req.query;
  let limitInt;
  let offsetInt;

  if (!isUndefined(limit)) limitInt = parseInt(limit, 10);
  if (!isUndefined(offset)) offsetInt = parseInt(offset, 10);
  console.log(autorizate);
  searchAlbums(term, limitInt, offsetInt).then((bdd) => {
    res.json(bdd);
  })
    .catch((err) => {
      next(err);
    });
};
