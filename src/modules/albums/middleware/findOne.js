const findOne = require('../services/findOne');

module.exports = (req, res, next) => {
  const { favorisId, albumId } = req.params;
  findOne(albumId, favorisId)
    .then((album) => {
      res.json(album);
    })
    .catch((err) => {
      next(err);
    });
};
