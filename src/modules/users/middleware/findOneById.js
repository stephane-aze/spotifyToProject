const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { userId } = req.params;
  findOneById(userId)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
