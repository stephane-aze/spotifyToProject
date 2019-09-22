const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const favorisToUpdate = req.body;
  const { favorisId } = req.params;

  updateOneById(favorisId, favorisToUpdate)
    .then((favoris) => {
      res.json(favoris);
    })
    .catch((err) => {
      next(err);
    });
};
