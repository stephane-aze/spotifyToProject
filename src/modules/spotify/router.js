const { Router } = require('express');
const getAlbums = require('./getAlbums');


const router = new Router();

router.route('/search/:album')
  .get(getAlbums);
module.exports = router;
