const find = require('../services/find');

module.exports = (req, res, next) => {
  const { favorisId } = req.params;
  const {
    first,
    offset,
  } = req.query;
  let firstInt;
  let offsetInt;

  if (first) firstInt = parseInt(first, 10);
  if (offset) offsetInt = parseInt(offset, 10);
  find(favorisId, firstInt, offsetInt)
    .then((albums) => {
      res.json(albums);
    })
    .catch((err) => {
      next(err);
    });
};
