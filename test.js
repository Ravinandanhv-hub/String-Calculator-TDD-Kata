const StringCalculator = require('./index');

describe('StringCalculator', () => {
    let calculator = new StringCalculator
    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

});