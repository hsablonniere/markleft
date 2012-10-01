var olympics = {
  games: [
    { city: 'London', season: 'summer 2012' },
    { city: 'Vancouver', season: 'winter 2010' },
    { city: 'Beijin', season: 'summer 2008' },
    { city: 'Turin', season: 'winter 2006' },
    { city: 'Athens', season: 'summer 2004' },
    { city: 'Salt Lake City', season: 'winter 2002' },
    { city: 'Sydney', season: 'summer 2000' },
    { city: 'Nagano', season: 'winter 1998' },
    { city: 'Atlanta', season: 'summer 1996' },
    { city: 'Lillehammer', season: 'winter 1994' }
  ],
  displayAllGames: function () {
    for (var i = 0; i < this.games.length; i++) {
      var game = this.games[i];
      console.log('Olympic games took place in ' + game.city + ' during ' + game.season);
    }
  }
};

console.log('Looking for past Olympic games. Please wait...');
setTimeout(olympics.displayAllGames, 5000);
