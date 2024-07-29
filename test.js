const StringCalculator = require('./index');

describe('StringCalculator', () => {

  test('should return 0 for an empty string', () => {
    expect(StringCalculator.add("")).toBe(0);
  });

});