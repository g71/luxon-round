import { DateTime } from 'luxon';

// Ceil/floor/round to multiple of unit
function adjustTime(adjust, dateTime, unit, multiple) {
  const unitValue = dateTime.get(unit);

  const roundingUp = () => {
    if(adjust === Math.ceil) {
      return true;
    }

    const raw = unitValue / multiple;
    const adjusted = adjust(raw);

    return adjusted > raw;
  };

  const startOfUnit = dateTime.startOf(unit);
  let calcValue = unitValue;

  if(dateTime > startOfUnit && roundingUp()) {
    // sub-units are > 0 and rounding upwards, increase calc value
    calcValue += 1;
  }

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

export default { DateTime };
export { DateTime };
