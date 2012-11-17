/**
 * Capitalize a given string
 * upper case for the first letter
 * lower case for the other letters
 * @param string
 * @return {String}
 */
dvx.utils.capitalize = function (string) {
  return string;
};

/**
 * Add a leading zero in front of the number if needed (2 => 02, 9 => 09, 12 => 12...)
 * @param number
 * @return {String}
 */
dvx.utils.leadingZero = function (number) {
  return number;
};

/**
 * Format a full date (represented as a string) to a time like this HH:MM
 * @param date
 * @return {String}
 */
dvx.utils.formatTime = function (date) {
  return date;
};

/**
 * Compare 2 talk objects using their properties : fromTime (and toTime if fromTime is the same)
 * -1 if talkA should be before talkB
 * 1 if talkA should be after talkB
 * 0 if the two talks have no sort order difference (same fromTime and same toTime)
 * @param talkA
 * @param talkB
 * @return {Number}
 */
dvx.utils.compareTalks = function (talkA, talkB) {
  return 0;
};
