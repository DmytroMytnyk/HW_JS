// /*** TASK 1 ***/
// //Randomizer function    
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomInt = getRandomInt();

// Recurcion function                 
const wrap = function(depth, value)  {        
   const target = {};                     
  (function wraper(n, cursor) {
    if (n < 1) {
      cursor.value = '😀';
    } else {
    cursor.value = {};
      wraper(--n, cursor.value);
    }
  })(depth, target)

  return target; 
}
const firstResult = wrap(getRandomInt(5, 10), '😀')       
console.log(firstResult); 


// /*** TASK 2 ***/
const unwrap = function (firstResult) {
let isObject = typeof firstResult === 'object' && !Array.isArray(firstResult) && firstResult !== null;
	return !isObject ? firstResult : unwrap(firstResult.value);   		                                                  
}
const returnRecursion = unwrap(firstResult);
console.log(returnRecursion);    


// Calculation of number of Fibonachi - declarative approach
const getFibonachi = function(n)
{
    if (n === 0){
        return 0;
    }
    else if (n === 1){
        return 1;
    }
    else{
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}
const result = getFibonachi(8);
console.log(result);


// Calculanion of factorial - declarative approach
const makeFactorial = function(n) {
   if (n > 1) {
return n * makeFactorial(n-1)
   }
   return n;
}
console.log(makeFactorial(10))


// Calculanion of factorial - iterative approach (while)
const doFactorial = function(n) {
  let result = 1;
  while(n){
      result *= n--;
  }
  return result;
}
console.log(doFactorial(4))


// Calculanion of factorial - iterative approach (for)
const factorial = function(n) {
  let result = 1; 

  for(let i = 1; i <= n; i ++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(4));