const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (albumId, favorisId) => {
  return connect()
    .then(db => db.collection(collections.TASKS))
    .then(collection => collection.deleteOne({ _id: ObjectId(albumId), favorisId }))
    .then((dbResponse) => {
      if (dbResponse.deletedCount === 1) {
        return {
          status: 'ok',
          deletedItem: albumId,
        };
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
