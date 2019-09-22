const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const listFindOneById = require('../../favoris/services/findOneById');

module.exports = (albumToAdd, favorisId) => {
  const album = {
    ...albumToAdd,
    favorisId,
    checked: false,
  };

  return createModel.validate(album)
    .then(() => listFindOneById(favorisId))
    .then(() => connect())
    .then(db => db.collection(collections.ALBUMS))
    .then(collection => collection.insertOne(album))
    .then(dbResponse => dbResponse.ops[0]);

  /* Can also be write like the
  return model.validate(listToCreate, model)
    .then(() => {
      return connect()
    })
    .then((db) => {
      return db.collection(collections.LISTS)
    })
    .then((collection) => {
      return collection.insertOne(listToCreate)
    })
    .then((dbResponse) => {
      return dbResponse.ops[0]
    });
  */
};
