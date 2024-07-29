class StringCalculator {
    add(numbers) {
        if (numbers === "") return 0;

        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const delimiterEndIndex = numbers.indexOf("\n");
            delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
            numbers = numbers.substring(delimiterEndIndex + 1);
        }

        const negativeNumbersArray = [];
        const sum = numbers.split(delimiter)?.reduce((total , num) => {
            num = Number(num);
            if(num < 0) {
                negativeNumbersArray.push(num);
            }
            if(num > 1000) {
                num = 0;
            }
            return total + num;
        }, 0)

        if(negativeNumbersArray?.length > 0) {
            throw new Error(`negatives not allowed: ${negativeNumbersArray.toString(',')}`)
        }

        return sum;
    }
}

module.exports = StringCalculator;