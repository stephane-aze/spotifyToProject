const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (albumId, favorisId) => {
  return connect()
    .then(db => db.collection(collections.ALBUMS))
    .then(collection => collection.findOne({ _id: ObjectId(albumId), favorisId }))
    .then((dbResponse) => {
      if (dbResponse) {
        return dbResponse;
      }

      const err = new Error(`Task not found for id: ${albumId}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
