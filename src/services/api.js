const { Router } = require('express');
const favorisRouter = require('../modules/favoris/router');
const albumsRouter = require('../modules/albums/router');
const usersRouter = require('../modules/users/router');
const spotifyRouter = require('../modules/spotify/router');
// const passportRouter = require('../modules/passport/router');


const router = new Router();

// Service  API
router.use('/api', favorisRouter);
router.use('/api', albumsRouter);
router.use('/api', usersRouter);
// router.use('/api', passportRouter);
router.use('/api', spotifyRouter);

// End of service API

module.exports = router;
