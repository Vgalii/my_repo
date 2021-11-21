function FirstFactorial(num) { 
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  
   return result;

}
   
// keep this function call here 
console.log(FirstFactorial(8));

