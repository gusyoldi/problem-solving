const findFirstRepeated = require('../problems/find-repeated-gift');

describe('find first repeated gift', () => {
  test('get first repeated gift', () => {
    const giftList1 = [1, 4, 3, 4, 4, 5, 6, 6];
    const giftList2 = [5, 7, 3, 4, 4, 5, 6, 6];

    const result1 = findFirstRepeated(giftList1);
    const result2 = findFirstRepeated(giftList2);

    expect(result1).toBe(4);
    expect(result2).toBe(5);
  });
});
