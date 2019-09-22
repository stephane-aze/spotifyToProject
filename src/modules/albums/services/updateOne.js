const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOne = require('./findOne');
const { updateModel } = require('../model');

module.exports = (albumId, favorisId, taskToUpdate) => {
  return updateModel.validate(taskToUpdate)
    .then(() => connect())
    .then(db => db.collection(collections.ALBUMS))
    .then(collection => collection.updateOne({
      _id: ObjectId(albumId),
      favorisId,
    }, { $set: taskToUpdate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOne(albumId, favorisId);
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
