import { DateTime } from 'luxon';

// Ceil/floor/round to multiple of unit
function adjustTime(adjust, dateTime, unit, multiple) {
  const unitValue = dateTime.get(unit);
  const raw = unitValue / multiple;
  const adjusted = adjust(raw);
  const direction = adjust === Math.ceil || adjusted > raw ? 1 : 0;
  const startOfUnit = dateTime.startOf(unit);
  // increase unit value if rounding up and sub-units are > 0
  const calcValue = unitValue + (dateTime > startOfUnit ? direction : 0);

  const newValue = {};
  newValue[unit] = adjust(calcValue / multiple) * multiple;

  return startOfUnit.set(newValue);
}

if (!DateTime.prototype.floor) {
  DateTime.prototype.floor = function(unit, multiple) {
    return adjustTime(Math.floor, this, unit, multiple);
  }
}

if (!DateTime.prototype.round) {
  DateTime.prototype.round = function(unit, multiple) {
    return adjustTime(Math.round, this, unit, multiple);
  }
}

if (!DateTime.prototype.ceil) {
  DateTime.prototype.ceil = function(unit, multiple) {
    return adjustTime(Math.ceil, this, unit, multiple);
  }
}

export { DateTime };
