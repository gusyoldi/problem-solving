function validatePIN(pin) {
  const isNotString = typeof pin != 'string';
  const hasAllowedLength = pin.length === 4 || pin.length === 6;

  if (isNotString) return false;
  if (hasAllowedLength) {
    return /^\d+$/.test(pin);
  } else {
    return false;
  }
}

const result = validatePIN('1234');

module.exports = validatePIN;
