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
      res.render('users', { users, menuId: 'admin' });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/create', (req, res) => {
  res.render('createUser', { menuId: 'admin' });
});

router.post('/users/created', (req, res, next) => {
  const userToCreate = req.body;
  userCreateOne(userToCreate)
    .then((user) => {
      res.render('userCreated', { user, menuId: 'admin' });
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
      res.render('user', { user, menuId: 'admin' });
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
      res.render('updateUser', { user, menuId: 'admin' });
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
      res.render('userUpdated', { user, menuId: 'admin' });
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
      res.render('deleteUser', { user, menuId: 'admin' });
    });
});
router.get('/users/userDeleted/:userId', (req, res, next) => {
  const {
    userId,
  } = req.params;

  deleteOneById(userId)
    .then((user) => {
      res.render('userDeleted', { user, menuId: 'admin' });
    })
    .catch((err) => {
      next(err);
    });
});
router.get('/about', (req, res) => {
  res.render('aboutUs', { menuId: 'home' });
});

router.get('/', (req, res) => {
  res.render('index', { menuId: 'home' });
});
module.exports = router;
