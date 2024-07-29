class StringCalculator {
    add(numbers) {
      if (numbers === "") return 0;

      if(numbers){
        const sum = numbers.split(',').reduce((total , num)=>{
            return total + Number(num);
        }, 0)
        return sum;
      }
    }
}
  
module.exports = StringCalculator;