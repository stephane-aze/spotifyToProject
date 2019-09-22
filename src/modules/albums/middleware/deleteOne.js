const deleteOne = require('../services/deleteOne');

module.exports = (req, res, next) => {
  const { favorisId, albumId } = req.params;

  deleteOne(albumId, favorisId)
    .then((album) => {
      res.json(album);
    })
    .catch((err) => {
      next(err);
    });
};
