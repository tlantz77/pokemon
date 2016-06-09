var Pokedex = require('pokedex-promise-v2');

var P = new Pokedex();
var pokemon;

P.getPokemonByName("butterfree")
    .then(function(response) {
      console.log(response.species);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });

console.log(pokemon);
