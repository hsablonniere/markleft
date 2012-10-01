(function () {
  var date = document.querySelector('.big-ben-date'),
      hoursHand = document.querySelector('.big-ben-hours'),
      minutesHand = document.querySelector('.big-ben-minutes'),
      bigBen;

  bigBen = {
    setDate: function (dateString) {
      date.textContent = dateString;
    },
    setHours: function (minutesInDegrees) {
      minutesHand.style.setProperty('-moz-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('-ms-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('-o-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('-webkit-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('transform', 'rotate(' + minutesInDegrees + 'deg)');
    },
    setMinutes: function (minutesInDegrees) {
      minutesHand.style.setProperty('-moz-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('-ms-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('-o-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('-webkit-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('transform', 'rotate(' + minutesInDegrees + 'deg)');
    }
  };

  clock.setTimezoneShift(0);

  setInterval(function () {
    clock.displayDate(bigBen.setDate);
    clock.displayTime(bigBen.setHours, bigBen.setMinutes);
  }, 1000);
})();
