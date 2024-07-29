class StringCalculator {
    add(numbers) {
      if (numbers === "") return 0;

      let delimiter = /,|\n/;
      if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
        numbers = numbers.substring(delimiterEndIndex + 1);
      }

      if(numbers){
        const sum = numbers.split(delimiter)?.reduce((total , num) => {
            return total + Number(num);
        }, 0)
        return sum;
      }
    }
}

let calculator = new StringCalculator
calculator.add('//;\n1;2')
  
module.exports = StringCalculator;