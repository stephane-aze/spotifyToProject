const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const userFindOneById = require('../../users/services/findOneById');

module.exports = (favorisToCreate) => {
  return createModel.validate(favorisToCreate)
    .then(() => userFindOneById(favorisToCreate.userId))
    .then(() => connect())
    .then(db => db.collection(collections.FAVORIS))
    .then(collection => collection.insertOne(favorisToCreate))
    .then(dbResponse => dbResponse.ops[0]);

  /* Can also be write like the
  return model.validate(favorisToCreate, model)
    .then(() => {
      return connect()
    })
    .then((db) => {
      return db.collection(collections.favorisS)
    })
    .then((collection) => {
      return collection.insertOne(favorisToCreate)
    })
    .then((dbResponse) => {
      return dbResponse.ops[0]
    });
  */
};
