var scoreboard = scoreboard || {};

scoreboard.addPlayerToDom = function (player) {
  var $player = $('<div></div>')
      .attr('id', player.id);

  var $playerName = $('<input type="text" class="player-name">')
      .val(player.name);

  $player
      .append($playerName)
      .append('<span>' + player.score + '</span>')
      .append('<button class="player-score-inc">+</button>')
      .append('<button class="player-score-dec">-</button>')
      .append('<button class="player-score-reset">00</button>')
      .append('<button class="player-score-remove">✕</button>');

  $player.appendTo('.players');
};

scoreboard.getRandomId = function () {
  return 'player-' + (Math.random() * 1e36).toString(36);
};

scoreboard.comparePlayer = function (playerA, playerB) {
  if (playerA.score === playerB.score) {
    return 0;
  } else if (playerA.score < playerB.score) {
    return 1;
  } else {
    return -1;
  }
};

Object.defineProperty(scoreboard, 'players', {
  get: function () {
    return this._players;
  },
  set: function (players) {
    this._idxPlayers = {};
    $('.players').html('');

    for (var i = 0; i < players.length; i++) {
      var player = players[i];
      scoreboard.addPlayerToDom(player);
      this._idxPlayers[player.id] = player;
    }

    this._players = players;

    this._players.get = function (id) {
      return scoreboard._idxPlayers[id];
    };

    this._players.put = function (player) {
      scoreboard._players.push(player);
      scoreboard._idxPlayers[player.id] = player;
      scoreboard.addPlayerToDom(player);
    };

    this._players.sort = function () {
      scoreboard.players = Array.prototype.sort.call(scoreboard._players, scoreboard.comparePlayer);
    };
  }
});

scoreboard.players = [
  {
    id: 'player-2nmeb1pa9csgg008soowg',
    name: 'John',
    score: 42
  },
  {
    id: 'player-1pzvjqeld04k4csk88s84',
    name: 'Paul',
    score: 5
  },
  {
    id: 'player-5t8lhbtcemkocwc04gw44',
    name: 'Ringo',
    score: 10
  },
  {
    id: 'player-472azipx32o0c0s4wockw',
    name: 'George',
    score: 7
  }
];
