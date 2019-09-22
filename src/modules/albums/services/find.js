const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (favorisId, first, offset) => {
  return connect()
    .then(db => db.collection(collections.ALBUMS))
    .then(collection => collection.find({ favorisId }, { limit: first, skip: offset }))
    .then(cursor => cursor.toArray());
};
