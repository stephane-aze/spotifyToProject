const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { favorisId } = req.params;

  deleteOneById(favorisId)
    .then((favoris) => {
      res.json(favoris);
    })
    .catch((err) => {
      next(err);
    });
};
