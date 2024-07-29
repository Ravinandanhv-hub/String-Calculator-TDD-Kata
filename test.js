const StringCalculator = require('./index');

describe('StringCalculator', () => {
    let calculator = new StringCalculator
    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('should return 1 for an string "1"', ()=>{
        expect(calculator.add('1')).toBe(1)
    })

    test('should return 3 for an string "1,2"', ()=>{
        expect(calculator.add('1,2')).toBe(3)
    })

});