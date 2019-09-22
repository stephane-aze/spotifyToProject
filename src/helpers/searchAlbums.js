const SpotifyWebApi = require('spotify-web-api-node');
const keys = require('../../config/connetToSpotify/spotify_default');


/* eslint-disable no-console */

const spotifyApi = new SpotifyWebApi(keys);


module.exports = (query, limit, offset) => {
  spotifyApi.searchAlbums(query, { limit, offset }).then((data) => {
    console.log(' Recherche par "query" ', data.id.body);
  }).catch((err) => {
    console.log(err);
  });
};
