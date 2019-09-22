const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const favorisToCreate = req.body;

  createOne(favorisToCreate)
    .then((favoris) => {
      res.json(favoris);
    })
    .catch((err) => {
      next(err);
    });
};
