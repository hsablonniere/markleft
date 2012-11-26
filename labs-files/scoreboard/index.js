var scoreboard = scoreboard || {};

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

scoreboard.playersFns = {
  get: function (id) {
    return scoreboard._idxPlayers[id];
  },

  put: function (aPlayer) {
    var player = Object.create(scoreboard.playerProto).init(aPlayer);
    scoreboard._players.push(player);
    scoreboard._idxPlayers[player.id] = player;
    player.addToDom();
    localStorage.setItem('scoreboard.players', JSON.stringify(scoreboard._players));
  },

  remove: function (id) {
    var player = scoreboard._players.get(id),
        idx = scoreboard._players.indexOf(player);

    scoreboard._players.splice(idx, 1);
    delete scoreboard._idxPlayers[id];
    $('#' + id).remove();

    localStorage.setItem('scoreboard.players', JSON.stringify(scoreboard._players));
  },

  sort: function () {
    scoreboard.players = Array.prototype.sort.call(scoreboard._players, scoreboard.comparePlayer);
  }
};

scoreboard.playerProto = {
  init: function (player) {
    this.id = player.id;
    this.name = player.name != null ? player.name : player._name;
    this.score = player.score != null ? player.score : player._score;
    return this;
  },

  addToDom: function () {
    var $player = $('<div></div>')
        .attr('id', this.id);

    var $playerName = $('<input type="text" class="player-name">')
        .val(this.name);

    $player
        .append($playerName)
        .append('<span class="player-score">' + this.score + '</span>')
        .append('<button class="player-score-inc">+</button>')
        .append('<button class="player-score-dec">-</button>')
        .append('<button class="player-score-reset">00</button>')
        .append('<button class="player-remove">✕</button>');

    $player.appendTo('.players');
  }
};

Object.defineProperties(scoreboard.playerProto, {
  name: {
    get: function () {
      return this._name;
    },
    set: function (name) {
      this._name = name;
      localStorage.setItem('scoreboard.players', JSON.stringify(scoreboard._players));
    }
  },
  score: {
    get: function () {
      return this._score;
    },
    set: function (score) {
      if (score < 0) {
        return;
      }
      this._score = score;
      $('#' + this.id + ' .player-score').html(score);
      localStorage.setItem('scoreboard.players', JSON.stringify(scoreboard._players));
    }
  }
});

Object.defineProperty(scoreboard, 'players', {
  get: function () {
    return this._players;
  },
  set: function (players) {
    this._idxPlayers = {};
    $('.players').html('');

    this._players = [];
    for (var fn in scoreboard.playersFns) {
      this._players[fn] = scoreboard.playersFns[fn];
    }

    for (var i = 0; i < players.length; i++) {
      this._players.put(players[i]);
    }
  }
});

scoreboard.players = JSON.parse(localStorage.getItem('scoreboard.players')) || [];
