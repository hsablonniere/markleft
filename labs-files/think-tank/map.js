(function () {
  // Initialization of the tiles

  var randomTile = function () {
    var random = Math.floor(Math.random() * (100 - 1));
    if (random < 10) {
      return 'tree';
    }
    return 'grass';
  };

  var $area = $('.area'),
      $map = $('.map'),
      count = $map.width() / 32 * $map.height() / 32;

  for (var i = 0; i < count; i++) {
    $map.append('<div class="tile ' + randomTile() + '"></div>');
  }
})();
