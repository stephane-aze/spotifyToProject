const SpotifyWebApi = require('spotify-web-api-node');
const keys = require('../../config/connetToSpotify/spotify_default');


const spotifyApi = new SpotifyWebApi(keys);


module.exports = (query) => {
  spotifyApi.searchTracks(query).then((data) => {
    console.log(' Recherche par "query" ', data.body);
  }).catch((err) => {
    console.log(err);
  });
};
