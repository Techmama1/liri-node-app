require("dotenv").config();
var keys = require('./javascript/keys');
var Spotify = require('node-spotify-api');


var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });

if (process.argv[2] == 'concert-this' ) {
    console.log( 'concert this');
    // Name of the venue
    // Venue location
    // Date of the Event (use moment to format this as "MM/DD/YYYY")   
} else if ( process.argv[2] == 'spotify-this-song') {
    console.log('spotify this song')
     spotify.search({ type: 'track', query: process.argv[3], limit: 1  }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
        var artist = data.tracks.items[0].album.artists[0].name
        var albumName = data.tracks.items[0].album.name

        var songName = data.tracks.items[0].name

        console.log(songName); 
    });

//     Artist(s)

// The song's name

// A preview link of the song from Spotify

// The album that the song is from

// If no song is provided then your program will default to "The Sign" by Ace of Base.
} else if ( process.argv[2] == 'movie-this') {
    console.log('movie this')
//     * Title of the movie.
//  * Year the movie came out.
//  * IMDB Rating of the movie.
//  * Rotten Tomatoes Rating of the movie.
//  * Country where the movie was produced.
//  * Language of the movie.
//  * Plot of the movie.
//  * Actors in the movie.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
} else if ( process.argv[2] == 'do-what-it-says') {
    console.log('do what it says')
}
   
//  spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });

