(function () {
  var html = document.querySelector('html'),
      infos = document.querySelector('.infos'),
      slugify;

  slugify = function (text) {
    text = text.toLowerCase();
    text = text.replace(/[^-a-zA-Z0-9]+/g, '-');
    return text;
  };

  olympics.update = function (game) {
    html.dataset.city = slugify(game.city);
    infos.innerHTML = '';
    for (var info in game) {
      infos.innerHTML += '<div class="' + info + '">' + game[info] + '</div>';
    }
  };
})();
