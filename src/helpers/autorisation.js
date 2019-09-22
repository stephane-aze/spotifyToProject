const SpotifyWebApi = require('spotify-web-api-node');
const keys = require('../../config/connetToSpotify/spotify_default');

const scopes = ['user-read-private', 'user-read-email'];
const state = 'some-state-of-my-choice';

const spotifyApi = new SpotifyWebApi(keys);

module.exports = spotifyApi.createAuthorizeURL(scopes, state);
