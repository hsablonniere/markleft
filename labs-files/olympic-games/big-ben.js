(function () {
  var date = document.querySelector('.big-ben-date'),
      hoursHand = document.querySelector('.big-ben-hours'),
      minutesHand = document.querySelector('.big-ben-minutes'),
      bigBen;

  bigBen = {
    setDate: function (dateString) {
      date.textContent = dateString;
    },
    setHours: function (hoursInDegrees) {
      hoursHand.style.setProperty('-moz-transform', 'rotate(' + hoursInDegrees + 'deg)');
      hoursHand.style.setProperty('-ms-transform', 'rotate(' + hoursInDegrees + 'deg)');
      hoursHand.style.setProperty('-o-transform', 'rotate(' + hoursInDegrees + 'deg)');
      hoursHand.style.setProperty('-webkit-transform', 'rotate(' + hoursInDegrees + 'deg)');
      hoursHand.style.setProperty('transform', 'rotate(' + hoursInDegrees + 'deg)');
    },
    setMinutes: function (minutesInDegrees) {
      minutesHand.style.setProperty('-moz-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('-ms-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('-o-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('-webkit-transform', 'rotate(' + minutesInDegrees + 'deg)');
      minutesHand.style.setProperty('transform', 'rotate(' + minutesInDegrees + 'deg)');
    }
  };

  clock.setTimezoneShift(60);

  setInterval(function () {
    clock.displayDate(bigBen.setDate);
    clock.displayTime(bigBen.setHours, bigBen.setMinutes);
  }, 1000);
})();
