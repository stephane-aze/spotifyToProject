const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { userId } = req.params;

  deleteOneById(userId)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      next(err);
    });
};
