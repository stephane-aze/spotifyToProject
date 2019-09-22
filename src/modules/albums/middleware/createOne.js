const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const { albumId } = req.params;
  const albumToAdd = req.body;
  createOne(albumToAdd, albumId)
    .then((task) => {
      res.send(task);
    })
    .catch((err) => {
      next(err);
    });
};
