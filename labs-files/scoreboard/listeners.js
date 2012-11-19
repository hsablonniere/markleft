$('.players')
    .on('change keyup', '.player-name', function (ev) {
      var playerId = $(this).parent().attr('id');
      scoreboard.players.get(playerId).name = $(this).val();
    })
    .on('click', '.player-score-inc', function (ev) {
      var playerId = $(this).parent().attr('id');
      scoreboard.players.get(playerId).score += 1;
    })
    .on('click', '.player-score-dec', function (ev) {
      var playerId = $(this).parent().attr('id');
      scoreboard.players.get(playerId).score -= 1;
    })
    .on('click', '.player-score-reset', function (ev) {
      var playerId = $(this).parent().attr('id');
      scoreboard.players.get(playerId).score = 0;
    })
    .on('click', '.player-remove', function (ev) {
      var playerId = $(this).parent().attr('id');
      scoreboard.players.remove(playerId);
    });

$('.player-add').on('click', function (ev) {
  scoreboard.players.put({
    id: scoreboard.getRandomId(),
    name: '',
    score: 0
  });
});

$('.player-sort').on('click', function (ev) {
  scoreboard.players.sort();
});
