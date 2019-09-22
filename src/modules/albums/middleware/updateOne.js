const updateOne = require('../services/updateOne');

module.exports = (req, res, next) => {
  const albumToAdd = req.body;
  const { favorisId, albumId } = req.params;

  updateOne(albumId, favorisId, albumToAdd)
    .then((album) => {
      res.json(album);
    })
    .catch((err) => {
      next(err);
    });
};
