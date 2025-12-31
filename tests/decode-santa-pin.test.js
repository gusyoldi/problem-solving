const decodeSantaPin = require('../problems/decode-santa-pin');

describe('decodeSantaPin', () => {
  test('should return null if the code is less than 4 digits', () => {
    expect(decodeSantaPin('[1,2,3]')).toBe(null);
  });

  test('should return the correct decoded pin', () => {
    expect(decodeSantaPin('[1,2,3,4]')).toBe('1234');
    expect(decodeSantaPin('[1,2,<,4]')).toBe('1224');
    expect(decodeSantaPin('[9,9+,0-,<]')).toBe('9099');
  });
});
