class StringCalculator {
    add(numbers) {
      if (numbers === "") return 0;

      if(numbers){
        const sum = numbers.split(/,|\n/)?.reduce((total , num) => {
            return total + Number(num);
        }, 0)
        return sum;
      }
    }
}

let calculator = new StringCalculator
calculator.add('1\n2,3')
  
module.exports = StringCalculator;