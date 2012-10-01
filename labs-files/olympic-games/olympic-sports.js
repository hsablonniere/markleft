(function () {
  var sports = [
    { name: 'Archery', events: 4 },
    { name: 'Athletics', events: 47 },
    { name: 'Badminton', events: 5 },
    { name: 'Basketball', events: 2 },
    { name: 'Boxing', events: 13 },
    { name: 'Canoeing', events: 16 },
    { name: 'Cycling', events: 18 },
    { name: 'Diving', events: 8 },
    { name: 'Equestrian', events: 6 },
    { name: 'Fencing', events: 10 },
    { name: 'Field hockey', events: 2 },
    { name: 'Football', events: 2 },
    { name: 'Gymnastics', events: 18 },
    { name: 'Handball', events: 2 },
    { name: 'Judo', events: 14 },
    { name: 'Modern pentathlon', events: 2 },
    { name: 'Rowing', events: 14 },
    { name: 'Sailing', events: 10 },
    { name: 'Shooting', events: 15 },
    { name: 'Swimming', events: 34 },
    { name: 'Synchronized swimming', events: 2 },
    { name: 'Table tennis', events: 4 },
    { name: 'Taekwondo', events: 8 },
    { name: 'Tennis', events: 5 },
    { name: 'Triathlon', events: 2 },
    { name: 'Volleyball', events: 4 },
    { name: 'Water polo', events: 2 },
    { name: 'Weightlifting', events: 15 },
    { name: 'Wrestling', events: 18 }
  ];

  var displaySport = function (sport) {
    console.log(sport.name + ' with ' + sport.events + ' events');
  };

  console.log('During the London Olympics, ' + sports.length + ' sports were represented.');
  for (var i = 0; i < sports.length; i++) {
    setTimeout(displaySport(sports[i]), i * 1000);
  }

})();
