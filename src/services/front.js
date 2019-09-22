const { Router } = require('express');
const userFindOneById = require('../modules/users/services/findOneById');
const userCreateOne = require('../modules/users/services/createOne');
const userUpdate = require('../modules/users/services/updateOneById');
const userFind = require('../modules/users/services/find');
const deleteOneById = require('../modules/users/services/deleteOneById');


const router = new Router();

router.get('/users', (req, res, next) => {
  userFind()
    .then((users) => {
      res.render('users', { users });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/create', (req, res) => {
  res.render('createUser');
});

router.post('/users/created', (req, res, next) => {
  const userToCreate = req.body;
  userCreateOne(userToCreate)
    .then((user) => {
      res.render('userCreated', { user });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/:userId', (req, res, next) => {
  const {
    userId,
  } = req.params;

  userFindOneById(userId)
    .then((user) => {
      res.render('user', { user });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/update/:userId', (req, res) => {
  const {
    userId,
  } = req.params;

  userFindOneById(userId)
    .then((user) => {
      res.render('updateUser', { user });
    });
});

router.post('/users/userUpdated', (req, res, next) => {
  const userRec = req.body;
  const { Id } = req.body;
  const userToUpdate = {
    ...userRec,
  };
  delete userToUpdate.Id;

  userUpdate(Id, userToUpdate)
    .then((user) => {
      res.render('userUpdated', { user });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/delete/:userId', (req, res) => {
  const {
    userId,
  } = req.params;

  userFindOneById(userId)
    .then((user) => {
      res.render('deleteUser', { user });
    });
});
router.get('/users/userDeleted/:userId', (req, res, next) => {
  const {
    userId,
  } = req.params;

  deleteOneById(userId)
    .then((user) => {
      res.render('userDeleted', { user });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
