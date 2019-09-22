const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { favorisId } = req.params;
  findOneById(favorisId)
    .then((favoris) => {
      res.json(favoris);
    })
    .catch((err) => {
      next(err);
    });
};
