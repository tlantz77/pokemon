// var Pokedex = require('pokedex-promise-v2');
// var P = new Pokedex();

$(document).ready(function() {

  $('.poke-form').on('submit', function(event) {
    event.preventDefault();
    $

    var $form = $(this);
    if ($form.is('#poke1')) {
      var player = "player1";
    } else {
      var player = "player2";
    };



    var url = $form.attr('action');
    var method = $form.attr('method');
    var data = $form.serialize();

    var request = $.ajax({
      url: url,
      method: method,
      data: data
    });

      request.done(function(response) {
        console.log(response);
        $(`#${player}`).find('img').attr("src", `http://img.pokemondb.net/artwork/${response.poke_name.toLowerCase()}.jpg`);

        $(`#${player}`).find('.poke-name').replaceWith(`<li class="poke-name">Name: ${response.poke_name}</li>`);
        $(`#${player}`).find('.poke-hp').replaceWith(`<li class="poke-hp">HP: ${response.poke_hp}</li>`);
        $(`#${player}`).find('.poke-move').replaceWith(`<li class="poke-move">Best Move: ${response.poke_move}</li>`);

        $(`#${player}`).find('.poke-details').css({"color": "yellow", "font-size": "2em", "background-color": "red"});
      });
  });
});
