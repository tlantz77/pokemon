// var Pokedex = require('pokedex-promise-v2');
// var P = new Pokedex();

$(document).ready(function() {
  $('#player1').on("click", function() {

    $(this).text("Hello");
  });

  $('#poke-form').on('submit', function(event) {
    event.preventDefault;
    var $form = $(this);
    url = $form.attr('action');
    method = $form.attr('method');
    data = $form.serialize();

    $.ajax({
      url: url,
      method: method,
      data: data
    })

      .done(function(response) {

      })
  })
});
