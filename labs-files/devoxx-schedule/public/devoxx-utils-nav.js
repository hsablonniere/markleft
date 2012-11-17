dvx.utils.nav = (function () {
  var dayCount = $('.schedule-day').length,
      dayIdx = 0,
      fromToCount,
      fromToIdx = 0,
      scrollTo,
      updateFromToCount;

  scrollTo = function () {
    if (fromToIdx === 0) {
      $('.schedule-day:eq(' + dayIdx + ')')[0].scrollIntoView(true);
    } else {
      $('.schedule-day:eq(' + dayIdx + ')').children('.schedule-from-to:eq(' + fromToIdx + ')')[0].scrollIntoView(true);
    }
  };

  updateFromToCount = function () {
    fromToCount = $('.schedule-day:eq(' + dayIdx + ') .schedule-from-to').length;
  };

  updateFromToCount();

  return {
    /**
     * Is the page currently scrolled on the first day
     * @return {Boolean}
     */
    isFirstDay: function () {
      return dayIdx === 0;
    },

    /**
     * Is the page currently scrolled on the last day
     * @return {Boolean}
     */
    isLastDay: function () {
      return dayIdx === dayCount - 1;
    },

    /**
     * Is the page currently scrolled on the first "from-to" block of the current day
     * @return {Boolean}
     */
    isFirstFromTo: function () {
      return fromToIdx === 0;
    },

    /**
     * Is the page currently scrolled on the last "from-to" block of the current day
     * @return {Boolean}
     */
    isLastFromTo: function () {
      return fromToIdx === fromToCount - 1;
    },

    /**
     * Scrolls the page to the previous day
     */
    previousDay: function () {
      dayIdx--;
      updateFromToCount();
      fromToIdx = 0;
      scrollTo();
    },

    /**
     * Scrolls the page to the last "from-to" block of the previous day
     */
    previousDayLastFromTo: function () {
      dayIdx--;
      updateFromToCount();
      fromToIdx = fromToCount - 1;
      scrollTo();
    },

    /**
     * Scrolls the page to the next day
     */
    nextDay: function () {
      dayIdx++;
      updateFromToCount();
      fromToIdx = 0;
      scrollTo();
    },

    /**
     * Scrolls the page to the next previous "from-to" block
     */
    previousFromTo: function () {
      fromToIdx--;
      scrollTo();
    },

    /**
     * Scrolls the page to the next next "from-to" block
     */
    nextFromTo: function () {
      fromToIdx++;
      scrollTo();
    }
  }
})();
